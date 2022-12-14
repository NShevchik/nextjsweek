import axios from 'axios'
import create, { StoreApi, UseBoundStore } from 'zustand'
import { tasksArray } from '../mocks/tasks/tasks'
import { IEmail, INotes, ITaskSpace, IUseEmailsStore, IUseFilesStore, IUseNewNote, IUseNotesStore, IUser, IUseTasksStore, UsersState } from '../types/types'
import { nanoid as id } from 'nanoid'
import { filesData } from '../mocks/files/filesData'

export const useUsers = create<UsersState<IUser>>((set) => ({
    usersState: [{ username: 'user', id: 'userid', userToker: 'null', profile: { firstName: 'null', lastName: 'null', email: 'null', userPhoto: 'null', userLevel: 0, userScore: 0 } }],
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ usersState: await response.json() })
    },
    setUsers: (data) => set(() => ({ usersState: data }))
}))
useUsers.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/users')

export const useNotes = create<IUseNotesStore<INotes>>((set) => ({
    notesState: [{ name: 'avi', id: '1', notes: [] }],
    fetch: async (url) => {
        const response = await fetch(url)
        set({ notesState: await response.json() })
    },
    setNotes: (data) => set(() => ({ notesState: data })),
    addFolder: async (folderName, url) => {
        axios.post(url, { name: folderName, notes: [] })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    },
    addNote: async (noteName, url) => {
        axios.post(url, { name: noteName, data: '' })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    },
    changeNoteDate: async (noteData, urlDel, urlPost) => {
        await axios.delete(urlDel)
        await axios.post(urlPost, noteData)
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    }
}))
useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders')

export const useNewNote = create<IUseNewNote<boolean>>((set) => ({
    newNoteStatus: false,
    newNoteEdit: () => set((state: any) => ({ newNoteStatus: !state.newNoteStatus }))
}))

export const useTasks: UseBoundStore<StoreApi<IUseTasksStore>> = create((set) => ({
    tasksState: tasksArray,
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ tasksState: await response.json() })
    },
    setDoneTask: (taskSpaceId, taskId) => set((state: IUseTasksStore) => {
        return {
            tasksState: state.tasksState.map((space: ITaskSpace) => {
                if (taskSpaceId === space.id) {
                    return {
                        ...space,
                        tasks: space.tasks.map((task) => {
                            if (task.id === taskId) {
                                return { ...task, done: !task.done }
                            }
                            return task;
                        })
                    }
                }
                return space;
            })
        }
    }),
    setPriorityTask: (taskSpaceId, taskId) => set((state: IUseTasksStore) => {
        return {
            tasksState: state.tasksState.map((space: ITaskSpace) => {
                if (taskSpaceId === space.id) {
                    return {
                        ...space,
                        tasks: space.tasks.map((task) => {
                            if (task.id === taskId) {
                                return { ...task, priority: !task.priority }
                            }
                            return task;
                        })
                    }
                }
                return space;
            })
        }
    }),
    addNewTask: async (taskSpaceId, taskText, user) => set((state: IUseTasksStore) => {
        return {
            tasksState: state.tasksState.map((space: ITaskSpace) => {
                if (taskSpaceId === space.id) {
                    return {
                        ...space,
                        tasks: [...space.tasks, {
                            name: taskText,
                            id: id(),
                            assignee: user ? user.username : "",
                            priority: false,
                            done: false
                        }]
                    }
                }
                return space;
            })
        }
    }),
    updateTasks: async (data, taskId) => {
        await axios.delete(`https://638f1f119cbdb0dbe31da265.mockapi.io/tasks/${taskId}`)
        await axios.post('https://638f1f119cbdb0dbe31da265.mockapi.io/tasks', data)
    }
}))
useTasks.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/tasks')

export const useEmails: UseBoundStore<StoreApi<IUseEmailsStore>> = create((set) => ({
    emailsState: null,
    emailsInbox: null,
    "Inbox": 'hello',
    fetch: async () => {
        const response = await require('../mocks/emails/emailsData.json')
        set({ emailsState: response })
        set({ emailsInbox: response['Inbox'] })
    },
    setSelected: (idEmail) => set((state: IUseEmailsStore) => {
        return {
            emailsInbox: state.emailsInbox.map((message: IEmail) => {
                if (message.emailId === idEmail) {
                    return { ...message, selected: !message.selected }
                }
                return message;
            })
        }
    }),
    setFavorite: (idEmail) => set((state: IUseEmailsStore) => {
        return {
            emailsInbox: state.emailsInbox.map((message: IEmail) => {
                if (message.emailId === idEmail) {
                    return { ...message, favorite: !message.favorite }
                }
                return message;
            })
        }
    })
}))
useEmails.getState().fetch()

export const useFiles: UseBoundStore<StoreApi<IUseFilesStore>> = create((set) => ({
    filesState: null,
    fetch: async () => {
        set({ filesState: filesData })
    },
}))
useFiles.getState().fetch()
import axios from 'axios'
import create, { StoreApi, UseBoundStore } from 'zustand'
import { tasksArray } from '../mocks/tasks/tasks'
import { ITask, ITaskSpace, IUser, IUseTasksStore, UsersState } from '../types/types'

export const useUsers = create<UsersState<IUser>>((set) => ({
    usersState: null,
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ usersState: await response.json() })
    },
    setUsers: (data) => set(() => ({ usersState: data }))
}))
useUsers.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/users')

export const useNotes: UseBoundStore<StoreApi<any>> = create((set) => ({
    notesState: [{ name: 'avi' }],
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ notesState: await response.json() })
    },
    setNotes: (data: any) => set(() => ({ notesState: data })),
    addFolder: async (folderName: string, url: any) => {
        axios.post(url, { name: folderName, notes: [] })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    },
    addNote: async (noteName: string, url: string) => {
        axios.post(url, { name: noteName, data: '' })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    },
    changeNoteDate: async (noteData: string, urlDel: string, urlPost: string) => {
        await axios.delete(urlDel)
        await axios.post(urlPost, noteData)
            .then((response) => console.log(response))
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    }
}))
useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders')

export const useNewNote: UseBoundStore<StoreApi<any>> = create((set) => ({
    newNoteStatus: false,
    newNoteEdit: () => set((state: any) => ({ newNoteStatus: !state.newNoteStatus }))
}))

export const useTasks: UseBoundStore<StoreApi<IUseTasksStore>> = create((set) => ({
    tasksState: tasksArray,
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
    })
}))

    // setCompleteTask: (tId, ItemId, value) => {
    //     set((state) => {
    //         return {
    //             todos: state.todos.map((_t) => {
    //                 if (tId === _t.id) {
    //                     return {
    //                         ..._t,
    //                         items: _t.items.map((_i) => {
    //                             if (_i.id === ItemId) {
    //                                 return { ..._i, completed: value };
    //                             }
    //                             return _i;
    //                         }),
    //                     };
    //                 }
    //                 return _t;
    //             }),
    //         };
    //     });
    // };

// function handleClick(task: ITask) {
//     tasksArray.map((taskSpace) =>
//         taskSpace.tasks.map(taska => taska.id === task.id ? taska.done = !taska.done : '')
//     )
// }
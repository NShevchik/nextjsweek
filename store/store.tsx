import axios from 'axios'
import create, { StoreApi, UseBoundStore } from 'zustand'
import { tasksArray } from '../mocks/tasks/tasks'
import { ITaskSpace, IUser, IUseTasksStore, UsersState } from '../types/types'

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
})) 
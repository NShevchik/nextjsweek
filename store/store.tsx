import create, { StoreApi, UseBoundStore } from 'zustand'
import { IUser, UsersState } from '../types/types'
import axios from 'axios'

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
    addNote: async (noteName: string, url: any) => {
        axios.post(url, { name: noteName, data: '' })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    }
}))
useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders')

export const useNewNote: UseBoundStore<StoreApi<any>> = create((set) => ({
    newNoteStatus: false,
    newNoteEdit: () => set((state: any) => ({ newNoteStatus: !state.newNoteStatus }))
}))

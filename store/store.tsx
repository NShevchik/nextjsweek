import create, { StoreApi, UseBoundStore } from 'zustand'
import { IUser, UsersState } from '../types/types'
import axios from 'axios'

export const useUsers = create<UsersState<IUser>>((set) => ({
    usersState: null,
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ usersState: await response.json() })
    },
    setUsers: (data) => set((state) => ({ usersState: data }))
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
        set((state: any) => ({ notesState: [...state.notesState, { name: folderName, notes: [] }] }));
        axios.post(url, { name: folderName, notes: [] })
            .then(() => useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders'))
    }
}))
useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/folders')


// let initNote = [
//     {
//         name: 'Design',
//         id: id(),
//         notes: [
//             {
//                 name: 'Amazing note',
//                 content: 'lorem orem lorem',
//                 id: '1'
//             },
//             {
//                 name: 'Wow its note',
//                 content: 'lorem orem lorem',
//                 id: '2'
//             }, {
//                 name: 'Barem baram boro',
//                 content: 'lorem orem lorem',
//                 id: '3'
//             }, {
//                 name: 'Bip 2009',
//                 content: 'lorem orem lorem',
//                 id: '4'
//             }, {
//                 name: 'Damnki',
//                 content: 'lorem orem lorem',
//                 id: '5'
//             },
//         ]
//     }
// ]
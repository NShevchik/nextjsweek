import create, { StoreApi, UseBoundStore } from 'zustand'
import { NOTES } from '../mocks/notes/notes'
import { IUser, MenuState, UsersState } from '../types/types'
import { nanoid as id } from 'nanoid'

export const useMenuOpen = create<MenuState>((set) => ({
    menu: 'translate-x-[-100%]',
    changeMenu: () => set((state) => ({ menu: state.menu === 'translate-x-[0]' ? 'translate-x-[-100%]' : 'translate-x-[0]' }))
}))

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
    notesState: ['be'],
    fetch: async (url: string) => {
        const response = await fetch(url)
        set({ notesState: await response.json() })
    },
    setNotes: (data: any) => set(() => ({ notesState: data })),
    addFolder: (folderName: string) => {
        set((state: any) => ({ notesState: [...state.notesState, { name: folderName, id: id(), notes: [] }] }));
    }
}))
useNotes.getState().fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/notes')




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
//     },
//     {
//         name: 'Social',
//         id: id(),
//         notes: [
//             {
//                 name: 'Suikpa',
//                 content: 'lorem orem lorem',
//                 id: '6'
//             },
//             {
//                 name: 'Ertanta',
//                 content: 'lorem orem lorem',
//                 id: '7'
//             }, {
//                 name: 'Qulap',
//                 content: 'lorem orem lorem',
//                 id: '8'
//             }, {
//                 name: 'Ftyukr',
//                 content: 'lorem orem lorem',
//                 id: '9'
//             }, {
//                 name: 'Bubn revs',
//                 content: 'lorem orem lorem',
//                 id: '10'
//             },
//         ]
//     },
// ]
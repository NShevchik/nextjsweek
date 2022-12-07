import create from 'zustand'
import { IUser, MenuState, UsersState } from '../types/types'

export const useMenuOpen = create<MenuState>((set) => ({
    menu: 'translate-x-[-100%]',
    changeMenu: () => set((state) => ({ menu: state.menu === 'translate-x-[0]' ? 'translate-x-[-100%]' : 'translate-x-[0]' }))
}))

export const useUsers = create<UsersState<IUser>>((set) => ({
    usersState: null,
    setUsers: (data) => set((state) => ({ usersState: data }))
}))
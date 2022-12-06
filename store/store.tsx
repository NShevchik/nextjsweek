import create from 'zustand'
interface MenuState {
    menu: string
    changeMenu: (menu: string) => void
}
interface UsersState<T> {
    usersState: Array<T> | null
    setUsers: (data: Array<T>) => void
}

export interface IUser {
    username: string,
    id: string,
    userToker: string
    profile: {
        firstName: string,
        lastName: string,
        email: string,
        userPhoto: string,
    }
}

export const useMenuOpen = create<MenuState>((set) => ({
    menu: 'translate-x-[-100%]',
    changeMenu: () => set((state) => ({ menu: state.menu === 'translate-x-[0]' ? 'translate-x-[-100%]' : 'translate-x-[0]' }))
}))

export const useUsers = create<UsersState<IUser>>((set) => ({
    usersState: null,
    setUsers: (data) => set((state) => ({ usersState: data }))
}))
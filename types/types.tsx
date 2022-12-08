export interface MenuState {
    menu: string
    changeMenu: (menu: string) => void
}
export interface UsersState<T> {
    usersState: Array<T> | null
    fetch: (url: string) => void
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
        userLevel: number,
        userScore: number,
    }
}

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

export interface ITaskSpace {
    name: string,
    priority: boolean,
    id: string,
    tasks: Array<ITask>
}
export interface ITask {
    name: string,
    id: string,
    assignee: string,
    priority: boolean,
    done: boolean
}
export interface IUseTasksStore {
    tasksState: Array<ITaskSpace>,
    fetch: (url: string) => void,
    setDoneTask: (taskSpaceId: string, taskId: string) => void,
    setPriorityTask: (taskSpaceId: string, taskId: string) => void,
    addNewTask: (taskSpaceId: string, taskText: string, user: IUser | null) => void,
    pushState?: (state: IUseTasksStore) => void,
    updateTasks: (data: any, taskId: string) => void
}
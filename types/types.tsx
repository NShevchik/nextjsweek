export interface MenuState {
    menu: string
    changeMenu: (menu: string) => void
}
export interface UsersState<T> {
    usersState: Array<T> | null
    fetch: (url: string) => void
    setUsers: (data: Array<T>) => void
}
export interface IUseNotesStore<T> {
    notesState: Array<T>,
    fetch: (url: string) => void,
    setNotes: (data: any) => void,
    addFolder: (folderName: string, url: string) => void,
    addNote: (noteName: string, url: string) => void,
    changeNoteDate: (noteData: string, urlDel: string, urlPost: string) => void
}
export interface INote {
    date: string,
    id: string,
    folderId: string,
    name: string,
    data: string
}
export interface INotes {
    name: string,
    id: string,
    notes: Array<INote>
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
export interface IUseNewNote<T> {
    newNoteStatus: T,
    newNoteEdit: () => void
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
export interface IEmail {
    sender: string,
    theme: string,
    text: string,
    email: string,
    userPhoto: string,
    sentDate: string,
    unread: boolean,
    favorite: boolean,
    spam: boolean,
    emailId: string,
    selected: boolean
}
export interface IUseEmailsStore {
    emailsState: any,
    emailsInbox: any,
    fetch: () => void,
    setSelected: (emailId: string) => void,
    setFavorite: (emailId: string) => void
}
export interface IFolder {
    name: string,
    id: string,
    files: Array<IFile>,
}
export interface IFile {
    name: string,
    id: string,
    type: string,
    owner: string,
    ownerUsername: string,
    modified: string,
    lastOpened: string
}
export interface IUseFilesStore {
    filesState: any,
    fetch: () => void,
}
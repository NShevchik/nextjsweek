import axios from 'axios'
import React, { useState } from 'react'
import { MdClose, MdDone } from 'react-icons/md'
import { useTasks, useUsers } from '../../store/store'
import { ITask, ITaskSpace, IUser } from '../../types/types'
import TaskListItem from './TaskListItem'
import TasksListHeader from './TasksListHeader'

const TasksList = ({ tasks, taskSpace }: { tasks: Array<ITask>, taskSpace: ITaskSpace }) => {
    const usersState = useUsers((state) => state.usersState)
    const user = usersState ? usersState[0] : null;
    const [addTask, setAddTask] = useState(false)
    const [taskText, setTaskText] = useState('')
    const setPriorityTask = useTasks((state) => state.setPriorityTask)
    const setDoneTask = useTasks((state) => state.setDoneTask)
    const addNewTask = useTasks((state) => state.addNewTask)
    const updateTasks = useTasks((state) => state.updateTasks)
    const tasksState = useTasks((state) => state.tasksState)

    async function clickAddNewTask(taskSpace: any, taskText: string, user: IUser | null) {
        const addNew = async () => { addNewTask(taskSpace.id, taskText, user) }
        addNew().then(() => setTaskText('')).then(() => updateTasks(useTasks.getState().tasksState.find((task) => task.id === taskSpace.id), taskSpace.id))
        setAddTask(false)
    }
    // .then(() => updateTasks(useTasks.getState().tasksState.find((task) => task.id === taskSpace.id), taskSpace.id))
    async function setDone(taskSpace: any, task: ITask) {
        const setDone = async () => { setDoneTask(taskSpace.id, task.id) }
        setDone().then(() => updateTasks(useTasks.getState().tasksState.find((task) => task.id === taskSpace.id), taskSpace.id))
    }
    function changePriotiry(taskSpace: any, task: ITask) {
        setPriorityTask(taskSpace.id, task.id)
    }



    return (
        <div className='p-[30px]'>
            <div className='border-x-2 border-t-2 border-background rounded-[7px]'>
                <TasksListHeader />
                <div>
                    {tasks.map(task => {
                        return <TaskListItem key={task.id} task={task} setDone={() => setDone(taskSpace, task)} changePriotiry={() => changePriotiry(taskSpace, task)} />
                    })}
                </div>
            </div>
            {addTask ?
                <div className='flex flex-row mt-[30px] items-center'>
                    <input value={taskText} onChange={(event) => setTaskText(event?.target.value)} type="text" className=' outline-whale-bowhead text-whale-bowhead text-[14px] border-2 rounded-[30px] inline-block px-[25px] py-[10px] border-background shadow-soft' placeholder='Task text...' />
                    <button className='ml-[10px] text-[30px] text-orange' onClick={() => clickAddNewTask(taskSpace, taskText, user)}>
                        <MdDone />
                    </button>
                    <button className='ml-[10px] text-[24px]' onClick={() => setAddTask(!addTask)}>
                        <MdClose />
                    </button>
                </div>
                :
                <button onClick={() => setAddTask(!addTask)} className='mt-[30px] text-whale-bowhead text-[14px] border-2 rounded-[30px] inline-block px-[25px] py-[10px] border-background shadow-soft'>
                    Add Tasks
                </button>
            }
        </div>
    )
}

export default TasksList
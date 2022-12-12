import React from 'react'
import { useTasks } from '../../store/store'
import { ITask, ITaskSpace } from '../../types/types'
import TaskListItem from './TaskListItem'
import TasksListHeader from './TasksListHeader'

const TasksList = ({ tasks, taskSpace }: { tasks: Array<ITask>, taskSpace: ITaskSpace }) => {
    const tasksArray = useTasks((state) => state.tasksState)
    const setDoneTask = useTasks((state) => state.setDoneTask)

    function handleClick(taskSpace: any, task: ITask) {
        setDoneTask(taskSpace.id, task.id)
    }
    return (
        <div className='p-[30px]'>
            <div className='border-x-2 border-t-2 border-background rounded-[7px]'>
                <TasksListHeader />
                <div>
                    {tasks.map(task => {
                        return <TaskListItem key={task.id} task={task} callback={() => handleClick(taskSpace, task)} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TasksList
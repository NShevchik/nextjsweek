import React from 'react'
import { ITask } from '../../types/types'
import TaskListItem from './TaskListItem'
import TasksListHeader from './TasksListHeader'

const TasksList = ({ tasks }: { tasks: Array<ITask> }) => {
    return (
        <div className='p-[30px]'>
            <div className='border-x-2 border-t-2 border-background rounded-[7px]'>
                <TasksListHeader />
                <div>
                    {tasks.map(task => {
                        return <TaskListItem key={task.id} task={task} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TasksList
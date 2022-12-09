import React from 'react'
import { ITaskSpace } from '../../types/types'
import TasksList from './TasksList'
import TasksSpaceHeader from './TasksSpaceHeader'

const TasksSpace = ({ taskSpace }: { taskSpace: ITaskSpace }) => {
    return (
        <div className='bg-white shadow-soft mb-[20px] rounded-[3px]'>
            <TasksSpaceHeader name={taskSpace.name} length={taskSpace.tasks.length} />
            <TasksList tasks={taskSpace.tasks} />
        </div>
    )
}

export default TasksSpace
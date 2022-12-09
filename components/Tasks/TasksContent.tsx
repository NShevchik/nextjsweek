import React from 'react'
import { useTasks } from '../../store/store'
import { ITaskSpace } from '../../types/types'
import TasksSpace from './TasksSpace'

export const TasksContent = () => {
    const tasksArray = useTasks((state) => state.tasksState)
    return (
        <div className='px-[50px] py-[35px]'>
            {tasksArray.map((taskSpace: ITaskSpace) => {
                return <TasksSpace key={taskSpace.id} taskSpace={taskSpace} />
            })}
        </div>
    )
}
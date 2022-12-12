import React from 'react'
import { useTasks } from '../../store/store'
import { ITask, ITaskSpace } from '../../types/types'
import TaskListItem from './TaskListItem'
import TasksListHeader from './TasksListHeader'

const TasksList = ({ tasks, taskSpace }: { tasks: Array<ITask>, taskSpace: ITaskSpace }) => {
    const setPriorityTask = useTasks((state) => state.setPriorityTask)
    const setDoneTask = useTasks((state) => state.setDoneTask)

    function setDone(taskSpace: any, task: ITask) {
        setDoneTask(taskSpace.id, task.id)
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
        </div>
    )
}

export default TasksList
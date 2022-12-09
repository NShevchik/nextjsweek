import React from 'react'
import { AiFillFlag } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { ITask } from '../../types/types'

const TaskListItem = ({ task }: { task: ITask }) => {
    return (
        <div className='border-b-2 border-b-background'>
            <div className='px-[25px] py-[15px] text-[14px] uppercase flex flex-row items-center text-whale-bowhead'>
                <div className='w-[50%] flex flex-row'>
                    <div className='text-[22px] text-whale-killer pr-[25px] cursor-pointer'>
                        {task.done
                            ?
                            <BsCheckCircleFill className='text-orange' />
                            :
                            <BsCheckCircleFill className='text-whale-killer' />
                        }
                    </div>
                    <div className=''>
                        {task.name}
                    </div>
                </div>
                <div className='w-[50%] flex flex-row'>
                    <div className='flex-25 text-center'>
                        0
                    </div>
                    <div className='flex-25 text-center'>
                        {task.assignee}
                    </div>
                    <div className='flex-25 text-center'>
                        14.05.2000
                    </div>
                    <div className='text-[22px] flex-25 flex justify-center cursor-pointer'>
                        {task.priority
                            ?
                            <AiFillFlag className='text-orange' />
                            :
                            <AiFillFlag className='text-whale-killer' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskListItem
import React from 'react'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'

const TasksListHeader = () => {
    return (
        <div className='border-b-2 border-b-background'>
            <div className='px-[25px] py-[15px] text-[14px] uppercase flex flex-row items-center text-whale-bowhead'>
                <div className='w-[50%] flex flex-row'>
                    <div className='text-[22px] text-whale-killer pr-[25px]'>
                        <HiOutlineChevronUpDown />
                    </div>
                    <div className=''>
                        name tasks
                    </div>
                </div>
                <div className='w-[50%] flex flex-row'>
                    <div className='flex-25 text-center'>
                        subtasks
                    </div>
                    <div className='flex-25 text-center'>
                        assignee
                    </div>
                    <div className='flex-25 text-center'>
                        due date
                    </div>
                    <div className='flex-25 text-center'>
                        priority
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksListHeader
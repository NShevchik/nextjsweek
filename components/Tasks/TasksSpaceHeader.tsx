import React from 'react'

const TasksSpaceHeader = ({ name, length }: { name: string, length: number }) => {
    return (
        <div className='p-[15px] border-b-background border-b-2 flex flex-row justify-between items-center'>
            <div className='flex flex-row items-baseline'>
                <div className='text-[14px] text-whale-bowhead pr-[25px]'>{name}</div>
                <div className='text-[12px] text-whale-fin'>{length} tasks</div>
            </div>
            <div className='text-[12px] text-whale-fin'>
                Future End Start Dates
            </div>
        </div>
    )
}

export default TasksSpaceHeader
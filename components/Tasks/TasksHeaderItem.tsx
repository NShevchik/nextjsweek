import React from 'react'

const TasksHeaderItem = ({ icon, text }: { icon: React.ReactElement, text: string }) => {
    return (
        <div className='flex flex-row mx-[20px] px-[20xp] text-whale-fin py-[30px] cursor-pointer hover:text-orange hover:border-b-orange border-b-2 border-b-transparent items-center'>
            <div className='text-[22px] pr-[5px]'>
                {icon}
            </div>
            <div className='text-[14px]'>
                {text}
            </div>
        </div>
    )
}

export default TasksHeaderItem
import React from 'react'

export const EmailsPageHeaderItem = ({ text, icon }: { text: string, icon: React.ReactElement }) => {
    return (
        <div className='flex flex-row items-center text-whale-killer hover:text-orange cursor-pointer pb-[30px]'>
            <div className='text-[24px] pr-[12px]'>
                {icon}
            </div>
            <div className='text-[14px]'>
                {text}
            </div>
        </div>
    )
}

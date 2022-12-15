import React from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

export const FilesFromFolderHeaderItem = ({ text, width }: { text: string, width: number }) => {
    return (
        <div className={`flex flex-row items-center text-whale-killer w-[${width}px]`}>
            <div className='text-[14px]'>
                {text}
            </div>
            <MdOutlineKeyboardArrowUp className='text-[20px]' />
        </div>
    )
}

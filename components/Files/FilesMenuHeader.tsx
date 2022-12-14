import React from 'react'
import { MdCreateNewFolder, MdUpload } from 'react-icons/md'

export const FilesMenuHeader = () => {
    return (
        <div className='border-b-2 border-whale-white pb-[30px]'>
            <div className='flex flex-row justify-between items-center px-[10px]'>
                <div className='text-[14px] text-whale-bowhead'>
                    Folders
                </div>
                <div className='flex flex-row text-[22px] text-whale-killer'>
                    <MdUpload className='hover:text-orange cursor-pointer' />
                    <MdCreateNewFolder className='ml-[15px] hover:text-orange cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
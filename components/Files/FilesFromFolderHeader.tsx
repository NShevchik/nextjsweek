import React from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { FilesFromFolderHeaderItem } from './FilesFromFolderHeaderItem'

export const FilesFromFolderHeader = () => {
    return (
        <div className='py-[25px] border-b-2 border-background'>
            <div className='flex flex-row justify-between px-[15px]'>
                <FilesFromFolderHeaderItem text={'Name'} width={200} />
                <FilesFromFolderHeaderItem text={'Location'} width={140} />
                <FilesFromFolderHeaderItem text={'Owner'} width={150} />
                <FilesFromFolderHeaderItem text={'Modified'} width={120} />
                <FilesFromFolderHeaderItem text={'Last opened'} width={120} />
            </div>
        </div>
    )
}
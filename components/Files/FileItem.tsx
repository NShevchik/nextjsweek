import React from 'react'
import { BsFileEarmarkFill } from 'react-icons/bs'

export const FileItem = ({ fileName }: { fileName: string }) => {
    return (
        <div className='flex flex-row px-[10px] items-center py-[15px] cursor-pointer'>
            <div className='text-[20px] text-whale-killer'>
                <BsFileEarmarkFill />
            </div>
            <div className='pl-[17px] text-whale-bowhead text-[14px]'>
                {fileName}
            </div>
        </div>
    )
}

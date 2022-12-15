import React from 'react'
import { BsFileEarmarkFill } from 'react-icons/bs'
import { MdFolder } from 'react-icons/md'
import { IFile, IFolder } from '../../types/types'

export const FillePreviewItem = ({ file, parent }: { file: IFile, parent: IFolder }) => {
    function setDateInEmail(time: string) {
        const dateFromJSON: Date = new Date(time);
        const today: Date = new Date()
        const raznice = ((Number(dateFromJSON) - Number(today)) / 86000000) * 24
        if (raznice < -24) {
            const norm = raznice * (-1) / 24;
            if (norm > 20) {
                return `${time.slice(8, 10)}.${time.slice(5, 7)}.${time.slice(0, 4)}`
            } else {
                return `${norm.toFixed()} day(s) ago`
            }
        } else {
            return time.slice(11, 16)
        }
    }
    return (
        <div className='flex flex-row items-center text-[14px] text-whale-bowhead py-[20px] cursor-pointer hover:bg-purple hover:text-white'>
            <div className='flex flex-row items-center w-[200px]'>
                <BsFileEarmarkFill className='text-[20px] text-whale-killer' />
                <div className='ml-[10px]'>
                    {file.name}
                </div>
            </div>
            <div className='flex flex-row items-center w-[140px]'>
                <MdFolder className='text-[20px] text-whale-killer' />
                <div className='ml-[10px]'>
                    {parent.name}
                </div>
            </div>
            <div className='flex flex-row items-center w-[150px]'>
                <div className='rounded-full w-[30px] h-[30px] overflow-hidden'>
                    <img src={file.owner} />
                </div>
                <div className='ml-[10px]'>
                    {file.ownerUsername}
                </div>
            </div>
            <div className='w-[120px]'>
                {setDateInEmail(file.modified)}
            </div>
            <div className='w-[120px]'>
                {setDateInEmail(file.lastOpened)}
            </div>
        </div>
    )
}
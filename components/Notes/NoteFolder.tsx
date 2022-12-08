import Link from 'next/link'
import React from 'react'
import { MdFolder } from 'react-icons/md'
import Folder from '../../pages/dashboard/notes/folder/[id]'

export const NoteFolder = ({ name, main, folder }: { name: string, main?: boolean, folder: any }) => {
    return main ? (
        <div className='flex flex-row border-2 w-full rounded-[30px] cursor-pointer py-[15px] items-center my-[10px] border-whale-white shadow-extrasoft justify-between'>
            <div className="text-whale-killer pl-[20px] text-[20px]">
                <MdFolder />
            </div>
            <div className='text-whale-bowhead text-[13px] pl-[20px] flex-grow'>
                {name}
            </div>
            <div className='text-[13px] text-whale-bowhead pr-[20px]'>
                {length}
            </div>
        </div>
    ) : (
        <Link href={`/dashboard/notes/folder/${folder.id}`} className='flex flex-row w-full cursor-pointer py-[10px] items-center justify-between border-2 border-transparent hover:border-whale-white hover:shadow-extrasoft rounded-[30px]'>
            <div className="text-whale-killer pl-[20px] text-[20px]">
                <MdFolder />
            </div>
            <div className='text-whale-bowhead text-[13px] pl-[20px] flex-grow'>
                {folder.name}
            </div>
            {/* <div className='text-[13px] text-whale-bowhead pr-[20px]'>
                {notes.length}
            </div> */}
        </Link>
    )
}

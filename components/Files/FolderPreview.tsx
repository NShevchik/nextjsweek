import Link from 'next/link'
import React from 'react'
import { MdFolder } from 'react-icons/md'
import { IFolder } from '../../types/types'

export const FolderPreview = ({ folder, color }: { folder: IFolder, color: string }) => {
    return (
        <Link href={`/dashboard/files/folders/${folder.id}`} className={`bg-${color} inline-block rounded-[5px] cursor-pointer hover:shadow-soft-${color}`}>
            <div className='flex flex-row items-center text-[14px] p-[25px] text-white justify-between'>
                <div className='flex flex-row items-center'>
                    <MdFolder className='text-[20px] opacity-50' />
                    <div className='pl-[15px]'>
                        {folder.name}
                    </div>
                </div>
                <div className='bg-black bg-opacity-25 py-[6px] px-[10px] rounded-[5px] text-[11px]'>
                    {folder.files.length}
                </div>
            </div>
        </Link>
    )
}

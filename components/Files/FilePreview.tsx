import Link from 'next/link'
import React from 'react'
import { IFile } from '../../types/types'

export const FilePreview = ({ file }: { file: IFile }) => {
    return (
        <Link href={''} className='bg-background min-w-[49%] h-full rounded-[5px]'>
            <div className='mt-[20px] border-l-2 border-l-orange py-[5px]'>
                <div className='flex flex-row justify-between items-center pr-[20px]'>
                    <div className='text-orange text-[12px] pl-[40px] uppercase'>
                        {file.type}
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                        <img src={file.owner} className='object-cover' />
                    </div>
                </div>
                <div className='text-[12px] pl-[40px] break-words text-whale-bowhead'>
                    {file.name}
                </div>
            </div>
            <div className='flex items-end justify-center h-[70%]'>
                <div className='bg-white h-[140px] w-[60%] rounded-[5px]'>
                    <div className='px-[20px] py-[30px] text-whale-bowhead text-[12px]'>
                        <div>File with ID:<p className='text-orange inline'>{file.id}</p> preview!</div>
                        <div className='text-whale-killer text-[10px] pt-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
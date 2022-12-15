import React from 'react'
import { IoMdHelpCircle, IoMdSettings } from 'react-icons/io'
import { MdSearch } from 'react-icons/md'

export const FilesPreviewHeader = () => {
    return (
        <div className='border-b-2 border-b-background pb-[30px] px-[25px]'>
            <div className='flex flex-row justify-between items-center'>
                <div className=" text-whale-fin text-[14px]">
                    <div className="flex flex-row items-center h-full">
                        <div className='text-[22px] mr-[20px]'>
                            <MdSearch />
                        </div>
                        <input type="text" className='text-black font-normal placeholder:font-bold w-full outline-none bg-transparent' placeholder='Search files...' />
                    </div>
                </div>
                <div className='flex flex-row text-[20px] text-whale-killer gap-5'>
                    <IoMdHelpCircle className='cursor-pointer hover:text-orange' />
                    <IoMdSettings className='cursor-pointer hover:text-orange' />
                </div>
            </div>
        </div>
    )
}

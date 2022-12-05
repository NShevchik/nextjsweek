import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdPhone, MdEmail, MdChromeReaderMode } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

export const ProfileLinks = () => {
    return (
        <div className='flex justify-center'>
            <div className='rounded-[30px] border-whale-gray border-2 w-[240px] p-[15px] flex flex-row justify-between text-[20px]'>
                <div className='text-orange px-[10px] cursor-pointer hover:scale-110'>
                    <MdPhone />
                </div>
                <div className='text-green px-[10px] cursor-pointer hover:scale-110'>
                    <MdEmail />
                </div>
                <div className='text-purple px-[10px] cursor-pointer hover:scale-110'>
                    <MdChromeReaderMode />
                </div>
                <div className='text-telegram px-[10px] cursor-pointer hover:scale-110'>
                    <FaTelegramPlane />
                </div>
                <div className='text-green px-[10px] cursor-pointer hover:scale-110'>
                    <RiWhatsappFill />
                </div>
            </div>
        </div>
    )
}

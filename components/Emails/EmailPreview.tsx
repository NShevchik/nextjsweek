import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { MdStar } from 'react-icons/md'
import { IEmail } from '../../types/types'
import { WhiteCircle_s } from '../WhiteCircle/WhiteCircle_s'

export const EmailPreview = ({ email }: { email: IEmail }) => {
    return (
        <div className=' bg-stone flex flex-row text-[14px] justify-between items-center py-[10px] px-[20px] rounded-[30px] my-[5px] cursor-pointer'>
            <div className='text-[24px] text-whale-killer flex flex-row items-center' >
                <HiCheckCircle className='hover:text-orange' />
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full  ml-[16px]'>
                    <img src={email.userPhoto} />
                </div>
            </div>
            <div className='flex flex-row items-center w-full px-[25px]'>
                <div className='text-whale-blue pr-[25px]'>
                    {email.sender}
                </div>
                <div className='text-whale-bowhead pr-[25px]'>
                    {email.theme}
                </div>
                <div className='text-whale-killer w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                    {email.text}
                </div>
            </div>
            <div className='pr-[15px] text-whale-bowhead text-[12px]'>
                {email.sentDate.slice(11, 16)}
            </div>
            <div>
                <WhiteCircle_s icon={<MdStar />} hoverBackground={true} />
            </div>
        </div>
    )
}

//сделать красиво дату отправки имейла(если не сегодня + дата)
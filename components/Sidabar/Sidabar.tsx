import React from 'react'
import { IoMdCompass } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { HiTrendingUp } from 'react-icons/hi'
import { RiEarthLine, RiMessengerFill } from 'react-icons/ri'
import { MdOutlineLocationCity } from 'react-icons/md'
import { WhiteCircle_m } from '../WhiteCircle/WhiteCircle_m'

export const Sidabar = () => {
    return (
        <div className='w-[102px] transition-all duration-300 overflow-hidden border-r-2 border-whale-gray menu'>
            <div className='pt-[35px] flex flex-col items-center'>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<IoMdCompass />} />
                </div>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<AiFillStar />} />
                </div>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<RiMessengerFill />} />
                </div>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<HiTrendingUp />} />
                </div>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<RiEarthLine />} />
                </div>
                <div className='mb-[15px]'>
                    <WhiteCircle_m icon={<MdOutlineLocationCity />} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { MdPerson } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { WhiteCircle_s } from '../WhiteCircle/WhiteCircle_s'

export const ProfileHeader = () => {
    return (
        <div className='flex flex-row justify-between py-[10px]'>
            <WhiteCircle_s icon={<MdPerson />} />
            <WhiteCircle_s icon={<FiMoreHorizontal />} />
        </div>
    )
}

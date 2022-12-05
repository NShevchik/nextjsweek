import React, { useState } from 'react'
import { RiDashboardFill } from 'react-icons/ri'
import { MdEmail, MdNote } from 'react-icons/md'
import { BsFillCloudyFill } from 'react-icons/bs'
import { CgPlayListCheck } from 'react-icons/cg'
import { ProfileMenuItem } from './ProfileMenuItem'
import { HiUsers } from 'react-icons/hi'
import { IoMdCalendar } from 'react-icons/io'
import { ImWrench } from 'react-icons/im'

export const ProfileMenu = () => {
    const [active, setActive] = useState(false)

    // function handleClick() {
    //     setActive(!active)
    // }
    return (
        <div className='flex flex-row flex-wrap mx-[auto] my-0 max-w-[240px] py-[30px]'>
            <ProfileMenuItem text={'Dashboard'} icon={<RiDashboardFill />} borders={'border-t-2 border-l-2 rounded-tl-[15px]'} selected={active} callback={() => handleClick()} />
            <ProfileMenuItem text={'Notes'} icon={<MdNote />} borders={'border-t-2 rounded-tr-[15px]'} selected={active} callback={() => handleClick()} />
            <ProfileMenuItem text={'Tasks'} icon={<CgPlayListCheck />} borders={'border-l-2'} selected={active} callback={() => handleClick()} />
            <ProfileMenuItem text={'Files'} icon={<BsFillCloudyFill />} selected={active} callback={() => handleClick()} />
            <ProfileMenuItem text={'Emails'} icon={<MdEmail />} borders={'border-l-2'} />
            <ProfileMenuItem text={'Clients'} icon={<HiUsers />} />
            <ProfileMenuItem text={'Calendars'} icon={<IoMdCalendar />} borders={'border-l-2 rounded-bl-[15px]'} />
            <ProfileMenuItem text={'Settings'} icon={<ImWrench />} borders={'rounded-br-[15px]'} />
        </div>
    )
}
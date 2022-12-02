import React from 'react'
import Link from 'next/link'
import { MdMoreHoriz } from 'react-icons/md'

export const Navbar = () => {
    return (
        <div className='text-whale-minke flex flex-row items-center h-full mx-8 text-[13px] '>
            <Link className='mr-7 hover:text-whale-blue' href={'/dashboard/emails'}>Dashboard</Link>
            <Link className='mr-7 hover:text-whale-blue' href={'/dashboard/files'}>About Us</Link>
            <Link className='mr-7 hover:text-whale-blue' href={'/dashboard/messenger'}>News</Link>
            <Link className='mr-7 hover:text-whale-blue' href={'/dashboard/notes'}>UserPolicy</Link>
            <Link className='mr-7 hover:text-whale-blue' href={'/404'}>Contacts</Link>
            <div className='cursor-pointer flex items-center hover:text-whale-blue'><MdMoreHoriz /></div>
        </div>
    )
}
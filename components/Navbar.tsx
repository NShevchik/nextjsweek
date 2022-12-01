import Link from 'next/link'
import { MdMoreHoriz } from 'react-icons/md'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='text-minke flex flex-row items-center h-full'>
            <Link className='mr-7 hover:text-blue' href={'/dashboard/emails'}>Dashboard</Link>
            <Link className='mr-7 hover:text-blue' href={'/dashboard/files'}>About Us</Link>
            <Link className='mr-7 hover:text-blue' href={'/dashboard/messenger'}>News</Link>
            <Link className='mr-7 hover:text-blue' href={'/dashboard/notes'}>UserPolicy</Link>
            <Link className='mr-7 hover:text-blue' href={'/404'}>Contacts</Link>
            <div className='cursor-pointer flex items-center hover:text-blue'><MdMoreHoriz /></div>
        </div>
    )
}
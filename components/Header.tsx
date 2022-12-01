import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <div className='w-full h-[93px] border-b-2 border-b-gray'>
            <div className='w-full h-full flex items-center justify-between'>
                <div className='text-blue text-lg'>
                    Constructor
                </div>
                <Navbar />
            </div>
        </div>
    )
}
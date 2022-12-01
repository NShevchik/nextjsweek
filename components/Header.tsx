import React from 'react'
import { Navbar } from './Navbar'
import { SearchBar } from './SearchBar'

export const Header = () => {
    return (
        <div className='w-full h-[93px] border-b-2 border-b-whale-gray'>
            <div className='w-full h-full flex items-center justify-between'>
                <div className='text-whale-blue text-lg'>
                    Constructor
                </div>
                <Navbar />
                <SearchBar />
            </div>
        </div>
    )
}
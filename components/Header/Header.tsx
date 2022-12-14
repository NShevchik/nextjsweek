import React from 'react'
import { useUsers } from '../../store/store'
import { LeftSideNavbar } from '../LeftSideNavbar/LeftSideNavbar'
import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from '../SearchBar/SearchBar'
import { UserNavigator } from '../UserNavigator/UserNavigator'

export const Header = () => {
    const usersState = useUsers((state) => state.usersState)
    const user = usersState ? usersState[0] : null;

    return (
        <div className='w-full h-[93px] border-b-2 border-b-whale-gray'>
            <div className='h-full flex items-center justify-between max-w-[1600px] m-auto px-[25px]'>
                <div className='mr-[10px]'>
                    <LeftSideNavbar />
                </div>
                <div className='text-whale-blue text-lg'>
                    Constructor
                </div>
                <Navbar />
                <SearchBar />
                {/* <UserNavigator username={user?.username} /> */}
            </div>
        </div>
    )
}
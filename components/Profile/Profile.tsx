import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileLinks } from './ProfileLinks'
import { ProfileMenu } from './ProfileMenu'
import { ProfileUser } from './ProfileUser'

export const Profile = () => {
    return (
        <div className=' w-[70%] my-0 mx-[auto] pt-[25px] '>
            <ProfileHeader />
            {/* <ProfileUser /> */}
            <ProfileMenu />
            <ProfileLinks />
        </div>
    )
}
import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileLinks } from './ProfileLinks'
import { ProfileMenu } from './ProfileMenu'
import { ProfileUser } from './ProfileUser'

export const Profile = () => {
    return (
        <div className=' w-[70%] my-0 mx-[auto] pt-[25px] '>
            <ProfileHeader />
            <ProfileUser username={'User Name'} useremail={'useremail@user.email'} userphoto={'https://cdn.pixabay.com/photo/2019/05/03/07/55/orange-4175325_1280.jpg'} />
            <ProfileMenu />
            <ProfileLinks />
        </div>
    )
}
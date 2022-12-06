import React from 'react'
import { useUsers } from '../../store/store';

export const ProfileUser = () => {
    const usersState = useUsers((state) => state.usersState)
    const user = usersState ? usersState[0] : null;

    return (
        <div className='flex flex-col w-[100%] items-center justify-center pt-[10px]'>
            <div className='w-[130px] h-[130px] rounded-full overflow-hidden'>
                <img src={user ? user.profile.userPhoto : 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg'} />
            </div>
            <div className='pt-[30px] text-center'>
                <div className='text-base leading-[30px] text-whale-bowhead'>
                    {user && `${user.profile.firstName} ${user.profile.lastName}`}
                </div>
                <div className='text-sm leading-[30px] text-whale-fin'>
                    {user ? user.profile.email : 'sceleton'}
                </div>
            </div>
        </div>
    )
}

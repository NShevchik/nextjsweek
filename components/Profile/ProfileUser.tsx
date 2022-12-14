import React from 'react'
import { useUsers } from '../../store/store';
import { ProfileUserLevel } from './ProfileUserLevel';

export const ProfileUser = () => {
    const usersState = useUsers((state) => state.usersState)
    const user = usersState ? usersState[0] : null;
    return (
        <div className='flex flex-col w-[100%] items-center justify-center pt-[10px]'>
            {user
                ?
                <div className='relative'>
                    <div className='w-[110px] h-[110px] rounded-full overflow-hidden'>
                        <img src={user.profile.userPhoto} className="object-cover" />
                    </div>
                    <ProfileUserLevel user={user} />
                </div>
                :
                <div className=' h-[130px] w-[130px] bg-whale-gray rounded-full animate-pulse' />
            }
            {user
                ?
                <div className='pt-[30px] text-center'>
                    <div className='text-base leading-[30px] text-whale-bowhead'>
                        {`${user.profile.firstName} ${user.profile.lastName}`}
                    </div>
                    <div className='text-sm leading-[30px] text-whale-fin'>
                        {user.profile.email}
                    </div>
                </div>
                :
                <div className='pt-[10px] w-[230px] h-[60px] flex flex-col items-center'>
                    <div className=' h-[15px] w-[170px] bg-whale-gray rounded-md animate-pulse' />
                    <div className=' h-[15px] w-[230px] bg-whale-gray rounded-md animate-pulse mt-[30px]' />
                </div>
            }
        </div>
    )
}
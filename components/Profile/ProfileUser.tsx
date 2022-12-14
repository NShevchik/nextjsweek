import React from 'react'
import ContentLoader from 'react-content-loader';
import { useUsers } from '../../store/store';
import { ProfileUserLevel } from './ProfileUserLevel';

export const ProfileUser = () => {
    const usersState = useUsers((state) => state.usersState)
    const user = usersState ? usersState[0] : null;
    return (
        <div className='flex flex-col w-[100%] items-center justify-center pt-[10px]'>
            {/* {user
                ?
                <div className='relative'>
                    <div className='w-[110px] h-[110px] rounded-full overflow-hidden'>
                        <img src={user.profile.userPhoto} className="object-cover" />
                    </div>
                    <ProfileUserLevel user={user} />
                </div>
                :
                <>
                    <ContentLoader
                        speed={2}
                        width={130}
                        height={130}
                        viewBox="0 0 130 130"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        uniqueKey="skeleton-image-circle"
                    >
                        <rect x="0" y="0" rx="100" ry="100" width="130" height="130" />
                    </ContentLoader>
                </>
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
                <div className='pt-[10px]'>
                    <ContentLoader
                        speed={2}
                        width={230}
                        height={60}
                        viewBox="0 0 230 60"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        uniqueKey="skeleton-name-email"
                    >
                        <rect x="30" y="0" rx="5" ry="5" width="170" height="15" />
                        <rect x="0" y="30" rx="5" ry="5" width="230" height="15" />
                    </ContentLoader>
                </div>
            } */}
        </div>
    )
}



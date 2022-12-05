import React from 'react'

export const ProfileUser = ({ username, useremail, userphoto }: { username: string, useremail: string, userphoto: string }) => {
    return (
        <div className='flex flex-col w-[100%] items-center justify-center pt-[10px]'>
            <div className='w-[130px] h-[130px] bg-orange rounded-full overflow-hidden'>
                <img src={userphoto} />
            </div>
            <div className='pt-[30px] text-center'>
                <div className='text-base leading-[30px] text-whale-bowhead'>
                    {username}
                </div>
                <div className='text-sm leading-[30px] text-whale-fin'>
                    {useremail}
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import { IUser } from '../../types/types'

export const ProfileUserLevel = ({ user }: { user: IUser }) => {
    return (
        <div className='w-[130px] h-[130px] absolute top-[-10px] left-[-10px]'>
            <div className='w-[30px] h-[30px] bg-orange rounded-full absolute flex items-center justify-center text-white text-[13px] top-[50%] translate-y-[-50%] translate-x-[50%] right-0 shadow-soft-orange'>
                {user.profile.userLevel}
            </div>
            <CircularProgressbar
                value={user.profile.userScore}
                counterClockwise={true}
                strokeWidth={2}
                styles={buildStyles({
                    pathColor: "#FF6633",
                    trailColor: "#DADEE6"
                })}
            />
        </div>
    )
}

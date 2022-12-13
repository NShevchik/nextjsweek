import React from 'react'
import { BsFillFileEarmarkFill } from 'react-icons/bs'

export const EmailComposeButton = () => {
    return (
        <div className="bg-orange w-full rounded-[30px] cursor-pointer hover:shadow-soft-orange mb-[40px]">
            <div className="py-[15px] flex flex-row items-center">
                <div className="text-white opacity-50 pl-[20px]">
                    <BsFillFileEarmarkFill />
                </div>
                <div className="text-[13px] text-white pl-[50px]">
                    New Note
                </div>
            </div>
        </div>
    )
}
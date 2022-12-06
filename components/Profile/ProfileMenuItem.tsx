import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const ProfileMenuItem = ({ text, icon, borders, selected, link }: { text: string, icon: React.ReactNode, borders?: string, selected?: boolean, link: string }) => {
    const router = useRouter()
    const pathname = router.pathname;

    return pathname.endsWith(text.toLowerCase()) ? (
        <div className={`w-[120px] h-[120px] text-[14px] scale-[1.15] bg-white border-none flex flex-col items-center cursor-pointer rounded-[15px] shadow-soft`}>
            <div className='pt-[30px] pb-[20px] text-[22px] text-orange'>
                {icon}
            </div>
            <div className='text-[12px] text-whale-bowhead'>
                {text}
            </div>
        </div>
    ) : (
        <Link href={link} className={`w-[120px] h-[120px] text-[14px] text-whale-fin border-whale-gray border-b-2 border-r-2 hover:text-orange flex flex-col items-center cursor-pointer ${borders}`}>
            <div className='pt-[30px] pb-[20px] text-[22px]'>
                {icon}
            </div>
            <div className='text-[12px]'>
                {text}
            </div>
        </Link>
    )
}
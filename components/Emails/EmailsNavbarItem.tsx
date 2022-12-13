import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const EmailsNavbarItem = ({ text, icon }: { text: string, icon: React.ReactElement }) => {
    const router = useRouter()
    const query = router.query.element;

    return query === text ? (
        <Link href={`/dashboard/emails/${text}`} className='bg-white rounded-[30px] flex flex-row items-center cursor-pointer  py-[15px] shadow-soft'>
            <div className='text-[22px] text-whale-killer px-[24px]'>
                {icon}
            </div>
            <div className='text-[14px] text-whale-bowhead'>
                {text}
            </div>
        </Link>
    ) : (
        <Link href={`/dashboard/emails/${text}`} className=' flex flex-row items-center cursor-pointer py-[15px]'>
            <div className='text-[22px] text-whale-killer px-[24px]'>
                {icon}
            </div>
            <div className='text-[14px] text-whale-bowhead'>
                {text}
            </div>
        </Link>
    )
}

export default EmailsNavbarItem
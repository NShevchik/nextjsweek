import { useRouter } from 'next/router'
import React from 'react'

export const EmailsPage = ({ array }: { array?: any }) => {
    const router = useRouter()
    return (
        <div className='bg-white'>
            <div className='px-[25px] py-[30px]'>
                <div>
                    Here map from array {router.query.element}
                </div>
            </div>
        </div>
    )
}

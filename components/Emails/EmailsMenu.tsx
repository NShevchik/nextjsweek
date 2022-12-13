import React from 'react'
import { EmailComposeButton } from './EmailComposeButton'
import { EmailsNavbar } from './EmailsNavbar'

export const EmailsMenu = () => {
    return (
        <div className='bg-stone w-[27%]'>
            <div className='px-[25px] py-[30px]'>
                <EmailComposeButton />
                <EmailsNavbar />
            </div>
        </div>
    )
}
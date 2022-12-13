import { useRouter } from 'next/router'
import React from 'react'
import { IEmail } from '../../types/types'
import { EmailPreview } from './EmailPreview'
import { EmailsPageHeader } from './EmailsPageHeader'

export const EmailsPage = ({ emails, element }: { emails: any, element: string }) => {
    const router = useRouter()
    // console.log(typeof (array[element]))

    return (
        <div className='bg-white w-[73%]'>
            <div className='px-[25px] py-[30px]'>
                <EmailsPageHeader />
                <div>
                    {emails[element].map((email: IEmail) => {
                        return <EmailPreview email={email} />
                    })}
                </div>
            </div>
        </div>
    )
}

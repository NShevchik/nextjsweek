import { useRouter } from 'next/router'
import React from 'react'
import { useEmails } from '../../store/store'
import { IEmail } from '../../types/types'
import { EmailPreview } from './EmailPreview'
import { EmailsPageHeader } from './EmailsPageHeader'

export const EmailsPage = ({ emails, page }: { emails?: any, page?: string }) => {
    const emailsInbox = useEmails((state) => state.emailsInbox)

    return (
        <div className='bg-white w-[73%]'>
            <div className='px-[25px] py-[30px]'>
                <EmailsPageHeader />
                <div>
                    {page === "Inbox"
                        ?
                        emailsInbox.map((email: IEmail) => {
                            return <EmailPreview key={email.emailId} email={email} />
                        })
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

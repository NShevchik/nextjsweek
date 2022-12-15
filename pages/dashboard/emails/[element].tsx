import { useRouter } from 'next/router'
import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { EmailsMenu } from '../../../components/Emails/EmailsMenu'
import { EmailsPage } from '../../../components/Emails/EmailsPage'
import { MainContainer } from '../../../components/MainContainer/MainContainer'
import { useEmails } from '../../../store/store'
import { IEmail } from '../../../types/types'

const EmailElement = () => {
    const router = useRouter()
    const page = String(router.query.element);
    const email = useEmails((state) => state.emailsState)

    return (
        <MainContainer keywords="EMAILS, main menu, profile" title={page}>
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <EmailsMenu />
                    {email ? <EmailsPage page={page} /> : <></>}
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default EmailElement

// { email }: { email: any }

// export async function getServerSideProps({ params }: { params: any }) {
//     const email = require('../../../mocks/emails/emailsData')
//     return {
//         props: { email },
//     }
// }

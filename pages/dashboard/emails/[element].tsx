import { useRouter } from 'next/router'
import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { EmailsMenu } from '../../../components/Emails/EmailsMenu'
import { EmailsPage } from '../../../components/Emails/EmailsPage'
import { MainContainer } from '../../../components/MainContainer/MainContainer'

const EmailElement = ({ emails }: { emails: any }) => {

    const email = require('../../../mocks/emails/emailsData')
    console.log(email)

    return (
        <MainContainer keywords="EMAILS, main menu, profile">
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <EmailsMenu />
                    <EmailsPage array={emails} />
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default EmailElement

// export async function getServerSideProps({ params }: { params: any }) {
//     const responseEmails = await fetch(`../../../mocks/emails/emailsData.JSON`)
//     const emails = await responseEmails.json()
//     return {
//         props: { emails },
//     }
// }

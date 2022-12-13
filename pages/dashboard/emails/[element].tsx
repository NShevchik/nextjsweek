import { useRouter } from 'next/router'
import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { EmailsMenu } from '../../../components/Emails/EmailsMenu'
import { EmailsPage } from '../../../components/Emails/EmailsPage'
import { MainContainer } from '../../../components/MainContainer/MainContainer'

const EmailElement = ({ email }: { email: any }) => {
    const router = useRouter()
    // let data = new Date()
    // console.log(data.toJSON())
    const openedElement = String(router.query.element);
    return (
        <MainContainer keywords="EMAILS, main menu, profile">
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <EmailsMenu />
                    <EmailsPage emails={email} element={openedElement} />
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default EmailElement

export async function getServerSideProps({ params }: { params: any }) {
    const email = require('../../../mocks/emails/emailsData')
    return {
        props: { email },
    }
}

import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { EmailsMenu } from "../../../components/Emails/EmailsMenu";
import { EmailsPage } from "../../../components/Emails/EmailsPage";
import { MainContainer } from "../../../components/MainContainer/MainContainer";

function emails() {
    return (
        <MainContainer keywords="EMAILS, main menu, profile">
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <EmailsMenu />
                    {/* <EmailsPage /> */}
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default emails;
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { FilesMenu } from "../../../components/Files/FilesMenu";
import { FilesPreview } from "../../../components/Files/FilesPreview";
import { MainContainer } from "../../../components/MainContainer/MainContainer";

function files() {
    return (
        <MainContainer keywords="FILES, main menu, profile">
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <FilesMenu />
                    <FilesPreview />
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default files;
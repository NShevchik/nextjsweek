import React from 'react'
import { ContentWrapper } from '../../../../components/ContentWrapper/ContentWrapper'
import { FilesMenu } from '../../../../components/Files/FilesMenu'
import { FilesPreview } from '../../../../components/Files/FilesPreview'
import { MainContainer } from '../../../../components/MainContainer/MainContainer'

const foldersPage = ({ params }: { params: { id: string } }) => {
    return (
        <MainContainer keywords="FILES, main menu, profile">
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <FilesMenu />
                    <FilesPreview folderId={params.id} />
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}
export default foldersPage
export async function getServerSideProps({ params }: { params: { id: string } }) {
    return {
        props: { params }
    }
}
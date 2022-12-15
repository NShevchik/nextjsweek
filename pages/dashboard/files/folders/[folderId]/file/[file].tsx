import Link from 'next/link'
import React from 'react'
import { ContentWrapper } from '../../../../../../components/ContentWrapper/ContentWrapper'
import { FilesMenu } from '../../../../../../components/Files/FilesMenu'
import { FilesPreview } from '../../../../../../components/Files/FilesPreview'
import { MainContainer } from '../../../../../../components/MainContainer/MainContainer'
import { useFiles } from '../../../../../../store/store'
import { IFile, IFolder } from '../../../../../../types/types'

const index = ({ params }: { params: { folderId: string, file: string } }) => {
    console.log(params)
    const filesState = useFiles((state) => state.filesState)
    const folder = filesState.find((folder: IFolder) => folder.id === params.folderId)
    const files = folder && folder.files
    const currentFile: IFile = files && files.find((file: IFile) => file.id === params.file)
    console.log(currentFile)
    return (
        <MainContainer keywords="FILES, main menu, profile" title={currentFile.name}>
            <ContentWrapper style="white">
                <div className="flex flex-row">
                    <FilesMenu />
                    <div className='w-[74%] px-[30px]'>
                        <div className='py-[30px] border-b-2 border-background'>
                            <div className='text-whale-bowhead text-[14px] flex flex-row '>
                                <Link href={`/dashboard/files/`} className='underline hover:text-orange'>Files</Link>
                                <p className='text-[14px] inline-block px-[5px]'>-</p>
                                <Link href={`/dashboard/files/folders/${params.folderId}`} className='underline hover:text-orange'>{folder.name}</Link>
                                <p className='text-[14px] inline-block px-[5px]'>-</p>
                                <div>{currentFile.name}</div>
                            </div>
                        </div>
                        <div className='text-whale-bowhead py-[30px] flex flex-col'>
                            <div>
                                Name: {currentFile.name}
                            </div>
                            <div>
                                Owner: {currentFile.ownerUsername}
                            </div>
                            <div>
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export default index

export async function getServerSideProps({ params }: { params: { folderId: string, file: string } }) {
    return {
        props: { params },
    }
}
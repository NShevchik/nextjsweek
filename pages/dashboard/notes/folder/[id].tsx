import React from 'react'
import { ContentWrapper } from '../../../../components/ContentWrapper/ContentWrapper'
import { MainContainer } from '../../../../components/MainContainer/MainContainer'
import { NotesNavigator } from '../../../../components/Notes/NotesNavigator'
import { NotesPreview } from '../../../../components/Notes/NotesPreview'

export default function Folder({ folder, notes }: { folder: any, notes: any }) {
    return (
        <MainContainer keywords='notes, note'>
            <ContentWrapper style="white">
                <div className='py-[30px] min-h-[200px]'>
                    <div className='flex flex-row'>
                        <NotesNavigator />
                        <div className='flex-25 bg-whale-blue'>
                            <div>Папка номер {folder.id}</div>
                            <div>Имя папки {folder.name}</div>
                            <div>Заметок в папке {notes.length}</div>
                        </div>
                        <NotesPreview />
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }: { params: any }) {
    const responseFolder = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}`)
    const responseNotes = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}/notes`)
    const folder = await responseFolder.json()
    const notes = await responseNotes.json()
    return {
        props: { folder, notes }, // will be passed to the page component as props
    }
}
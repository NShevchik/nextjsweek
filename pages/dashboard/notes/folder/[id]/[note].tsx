import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../../../../components/ContentWrapper/ContentWrapper'
import { MainContainer } from '../../../../../components/MainContainer/MainContainer'
import { NewNote } from '../../../../../components/Notes/NewNote'
import { NoteEditor } from '../../../../../components/Notes/NoteEditor'
import { NotePreview } from '../../../../../components/Notes/NotePreview'
import { NotesNavigator } from '../../../../../components/Notes/NotesNavigator'
import { useNewNote, useNotes } from '../../../../../store/store'

const noteOpen = ({ folder, notes, note }: { folder: any, notes: any, note: any }) => {
    const noteStatus = useNewNote((state) => state.newNoteStatus)
    return (
        <MainContainer keywords='notes, note' title={note.name}>
            <ContentWrapper style="white">
                <div className='py-[30px] min-h-[200px]'>
                    <div className='flex flex-row'>
                        <NotesNavigator />
                        <div className='flex-25 border-x-2 border-whale-white'>
                            <div>
                                <div className='flex border-b-2 border-whale-white justify-between p-[20px] items-center'>
                                    <div className='text-whale-bowhead'>
                                        {folder.name}
                                    </div>
                                </div>
                            </div>
                            {notes.map((note: any) => {
                                return <NotePreview key={note.id} name={note.name} date={note.date} folder={folder} note={note} />
                            })}
                            {noteStatus ? <NewNote folder={folder} /> : <></>}
                        </div>
                        <NoteEditor note={note} folder={folder} />
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }: { params: any }) {
    const responseFolder = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}`)
    const responseNotes = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}/notes`)
    const responseNote = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}/notes/${params.note}`)
    const folder = await responseFolder.json()
    const notes = await responseNotes.json()
    const note = await responseNote.json()
    return {
        props: { folder, notes, note },
    }
}

export default noteOpen


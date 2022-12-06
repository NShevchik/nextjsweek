import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { MainContainer } from '../../../components/MainContainer/MainContainer'
import { NotesList } from '../../../components/Notes/NotesList'
import { NotesNavigator } from '../../../components/Notes/NotesNavigator'
import { NotesPreview } from '../../../components/Notes/NotesPreview'

export default function notes() {
    return (
        <MainContainer keywords='notes, note'>
            <ContentWrapper style="white">
                <div className='py-[30px] min-h-[200px]'>
                    <div className='flex flex-row'>
                        <NotesNavigator />
                        <NotesList />
                        <NotesPreview />
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

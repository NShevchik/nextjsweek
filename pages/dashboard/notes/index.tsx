import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { MainContainer } from '../../../components/MainContainer/MainContainer'
import { NotesList } from '../../../components/Notes/NotesList'
import { NotesNavigator } from '../../../components/Notes/NotesNavigator'
import { NotesPreview } from '../../../components/Notes/NotesPreview'
import { useNotes } from '../../../store/store'
import { nanoid as id } from 'nanoid'

export default function notes({ notes }: {notes: any}) {
    const setNotes = useNotes((state: any) => state.setNotes)
    const allotes = useNotes((state: any) => state.notesState)
    // setNotes(notes)
    // console.log(allotes)

    // function postpost() {
    //     // fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/notes', { method: 'POST', body: JSON.stringify({ name: 'Nikita' }) })
    //     fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/notes', {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: 'Nikita' }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Success:', data);
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }
    // postpost()

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

// export async function getStaticProps() {
//     const response = await fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/notes');
//     const notes = await response.json();

//     return {
//         props: { notes }
//     }
// }


//https://638f1f119cbdb0dbe31da265.mockapi.io/notes
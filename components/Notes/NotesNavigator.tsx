import React, { useEffect, useState } from 'react'
import { useNotes } from '../../store/store'
import { NewFolderButton } from './NewFolderButton'
import { NewFolderEditor } from './NewFolderEditor'
import { NewNoteButton } from './NewNoteButton'
import { NoteFolder } from './NoteFolder'

export const NotesNavigator = () => {
    const notes = useNotes((state: any) => state.notesState)
    const [newFolder, setNewFolder] = useState(false)

    // useEffect(() => {
    //     let fetchNotes = useNotes((state: any) => state.fetch('https://638f1f119cbdb0dbe31da265.mockapi.io/notes'))
    // }, [notes])

    return (
        <div className='flex-25'>
            <div className='px-[20px]'>
                <NewNoteButton />
                <button onClick={() => console.log(notes)}>Console noters</button>
                {notes !== 'undefiend' ?
                    <div className='my-[30px]'>
                        {notes.map((folder: any) => {
                            return <NoteFolder key={folder.id} name={folder.name} length={folder.notes?.length} />
                        })}
                    </div>
                    : <></>
                }
                <div className='max-w-full'>
                    {newFolder ?
                        <NewFolderEditor setState={setNewFolder} />
                        :
                        <NewFolderButton callback={() => setNewFolder(true)} />
                    }
                </div>
            </div>
        </div>
    )
}

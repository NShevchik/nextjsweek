import React, { useState } from 'react'
import { useNotes } from '../../store/store'
import { NewFolderButton } from './NewFolderButton'
import { NewFolderEditor } from './NewFolderEditor'
import { NewNoteButton } from './NewNoteButton'
import { NoteFolder } from './NoteFolder'

export const NotesNavigator = () => {
    const [newFolder, setNewFolder] = useState(false)
    const notes = useNotes((state: any) => state.notesState)
    return (
        <div className='flex-25'>
            <div className='px-[20px]'>
                <NewNoteButton />
                {notes ?
                    <div className='my-[30px]'>
                        {notes.map((folder: any) => {
                            return <NoteFolder key={folder.id} name={folder.name} folder={folder} />
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

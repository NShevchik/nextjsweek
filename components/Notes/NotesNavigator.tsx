import React from 'react'
import { NewFolderButton } from './NewFolderButton'
import { NewNoteButton } from './NewNoteButton'
import { NoteFolder } from './NoteFolder'

export const NotesNavigator = () => {
    return (
        <div className='flex-25'>
            <div className='px-[20px]'>
                <NewNoteButton />
                <div className='my-[30px]'>
                    <NoteFolder name={'All Notes'} length={31} main={true} />
                    <NoteFolder name={'Folder Name'} length={2} />
                    <NoteFolder name={'Folder Nikta'} length={7} />
                    <NoteFolder name={'Folder Naimery'} length={1} />
                    <NoteFolder name={'Fold 2'} length={21} />
                </div>
                <div>
                    <NewFolderButton />
                </div>
            </div>
        </div>
    )
}

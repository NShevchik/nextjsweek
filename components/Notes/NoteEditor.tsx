import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useNotes } from '../../store/store';
import { MdDone, MdEdit } from 'react-icons/md';
import { WhiteCircle_border } from '../WhiteCircle/WhiteCircle_border';

export const NoteEditor = ({ note, folder }: { note: any, folder: any }) => {
    const router = useRouter();
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')
    const changeNoteData = useNotes((state) => state.changeNoteDate)
    function startEdit() {
        setEdit(!edit)
        setValue(note.data)
    }
    function doneEdit() {
        setEdit(!edit)
        note.data = value
        changeNoteData(note, `https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${folder.id}/notes/${note.id}`, `https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${folder.id}/notes/`)
        router.replace(router.asPath);
    }
    return (
        <div className='flex-50 flex flex-col'>
            <div className=' border-b-2 border-whale-white'>
                <div className='flex justify-between p-[20px] items-center'>
                    <div className='text-whale-bowhead'>
                        {note.name}
                    </div>
                    {edit
                        ?
                        <WhiteCircle_border icon={<MdDone />} color={'green'} callback={() => doneEdit()} />
                        :
                        <WhiteCircle_border icon={<MdEdit />} callback={() => startEdit()} />
                    }
                </div>
            </div>
            {edit
                ?
                <textarea className='outline-none min-h-[150px] resize-none p-[20px]' placeholder='Note text...' value={value} onChange={(event) => setValue(event?.target.value)} />
                : <div className='text-whale-bowhead p-[20px]'>
                    {note.data}
                </div>
            }
        </div>
    )
}
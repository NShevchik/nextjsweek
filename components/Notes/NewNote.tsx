import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MdClose, MdDone } from 'react-icons/md'
import { useNewNote, useNotes } from '../../store/store'

export const NewNote = ({ folder }: { folder: any }) => {
    const addNote = useNotes((state) => state.addNote)
    const changeNewNote = useNewNote((state) => state.newNoteEdit)
    const [value, setValue] = useState('')
    const router = useRouter();

    async function handleClick() {
        await addNote(value, `https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${folder.id}/notes`);
        changeNewNote();
        router.replace(router.asPath);
    }

    return (
        <div className='border-2 border-whale-minke'>
            <div className='p-[15px] text-[12px] flex flex-row justify-between items-center'>
                <div className='leading-[20px] pb-[5px] text-whale-bowhead'>
                    <input value={value} onChange={(event) => setValue(event.target.value)} type="text" maxLength={25} placeholder='Note name...' className='outline-none text-[14px] w-full' />
                </div>
                <div className='cursor-pointer text-[20px] text-whale-blue font-bold mr-[5px]' onClick={() => changeNewNote()}>
                    <MdClose />
                </div>
                <div className='cursor-pointer text-[22px] text-orange font-bold' onClick={() => handleClick()}>
                    <MdDone />
                </div>
            </div>
        </div>
    )
}
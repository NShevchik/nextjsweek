import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

export const NotesList = () => {
    return (
        <div className='flex-25 border-x-2 border-whale-white flex justify-center items-center'>
            <div className='flex flex-row items-center text-whale-bowhead'>
                <MdArrowBackIos />
                Open Any Folder
            </div>
        </div>
    )
}

import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

export const NotesPreview = () => {
    return (
        <div className='flex-50 flex items-center justify-center'>
            <div className='flex flex-row items-center text-whale-bowhead'>
                <MdArrowBackIos />
                Open Any Note
            </div>
        </div>
    )
}

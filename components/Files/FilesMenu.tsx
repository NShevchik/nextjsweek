import React from 'react'
import { FilesMenuNav } from './FilesMenuFolder'
import { FilesMenuFooter } from './FilesMenuFooter'
import { FilesMenuHeader } from './FilesMenuHeader'

export const FilesMenu = () => {
    return (
        <div className='bg-stone w-[26%]'>
            <div className='px-[25px] py-[30px]'>
                <FilesMenuHeader />
                <FilesMenuNav />
                <FilesMenuFooter />
            </div>
        </div>
    )
}
import React from 'react'
import { FilesFromFolderPreview } from './FilesFromFolderPreview'
import { FilesPreviewHeader } from './FilesPreviewHeader'
import { FilesPreviewShowcase } from './FilesPreviewShowcase'

export const FilesPreview = ({ folderId }: { folderId?: string }) => {
    return (
        <div className='px-[25px] py-[30px] w-[74%]'>
            <FilesPreviewHeader />
            <FilesPreviewShowcase />
            <FilesFromFolderPreview id={folderId} />
        </div>
    )
}
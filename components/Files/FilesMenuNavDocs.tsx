import React from 'react'
import { filesData } from '../../mocks/files/filesData'
import { FileItem } from './FileItem'

export const FilesMenuNavDocs = () => {
    const files = filesData[2].files;
    return (
        <div className='border-b-2 border-whale-white py-[20px]'>
            {files.map((file) => {
                return <FileItem key={file.id} fileName={file.name} />
            })}
        </div>
    )
}
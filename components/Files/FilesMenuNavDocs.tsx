import React from 'react'
import { filesData } from '../../mocks/files/filesData'
import { useFiles } from '../../store/store';
import { FileItem } from './FileItem'

export const FilesMenuNavDocs = () => {
    const files = filesData[2].files;
    const filesState = useFiles((state) => state.filesState)
    console.log(filesState)
    return (
        <div className='border-b-2 border-whale-white py-[20px]'>
            {files.map((file) => {
                return <FileItem key={file.id} fileName={file.name} />
            })}
        </div>
    )
}
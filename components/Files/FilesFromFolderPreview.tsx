import React from 'react'
import { useFiles } from '../../store/store'
import { IFile, IFolder } from '../../types/types'
import { FilesFromFolderHeader } from './FilesFromFolderHeader'
import { FillePreviewItem } from './FillePreviewItem'

export const FilesFromFolderPreview = ({ id }: { id?: string }) => {
    const filesState = useFiles((state) => state.filesState)
    const folder = filesState.find((folder: IFolder) => folder.id === id)
    const files = folder.files
    return (
        <div>
            <FilesFromFolderHeader />
            <div>

            </div>
            {/* Here is files from {id} */}
            {files.map((file: IFile) => {
                return <FillePreviewItem key={file.id} file={file} parent={folder} />
            })}
        </div>
    )
}

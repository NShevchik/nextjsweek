import React from 'react'
import { useFiles } from '../../store/store'
import { IFile, IFolder } from '../../types/types'
import { FilePreview } from './FilePreview'
import { FolderPreview } from './FolderPreview'

export const FilesPreviewShowcase = () => {
    const filesState = useFiles((state) => state.filesState);
    let count = -1;
    let colors = ['orange', 'purple', 'telegram'];
    return (
        <div className='flex flex-row pt-[30px] gap-[10px]'>
            <div className='flex flex-col w-[33%] gap-[10px]'>
                {filesState.map((folder: IFolder) => {
                    count++;
                    if (count <= 2) {
                        return <FolderPreview color={colors[count]} key={folder.id} folder={folder} />
                    }
                })}
            </div>
            <div className='overflow-hidden max-w-[500px]'>
                <div className='w-full flex flex-row gap-[10px] h-full'>
                    {filesState.map((folder: IFolder) => {
                        return folder.files.map((file: IFile) => { return <FilePreview key={file.id} file={file} /> })
                    })}
                </div>
            </div>
        </div>
    )
}

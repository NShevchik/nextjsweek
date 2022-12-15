import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { filesData } from '../../mocks/files/filesData'
import { IFolder } from '../../types/types'
import { FolderItem } from './FolderItem'

export const FilesMenuNavFolders = () => {
    return (
        <div className='border-b-2 border-whale-white py-[20px]'>
            {filesData.map((folder: IFolder) => {
                return <FolderItem key={folder.id} folderName={folder.name} id={folder.id} />
            })}
            <FolderItem key={'favorites'} folderName={'Favorite Files'} icon={<AiFillStar />} id={'favorites'} />
        </div>
    )
}
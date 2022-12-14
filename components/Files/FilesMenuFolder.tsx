import React from 'react'
import { FilesMenuNavDocs } from './FilesMenuNavDocs'
import { FilesMenuNavFolders } from './FilesMenuNavFolders'

export const FilesMenuNav = () => {
    return (
        <div>
            <FilesMenuNavFolders />
            <FilesMenuNavDocs />
        </div>
    )
}
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdFolder } from 'react-icons/md'

export const FolderItem = ({ folderName, icon, id }: { folderName: string, icon?: React.ReactElement, id: string }) => {
    const router = useRouter()
    const query = router.query.folderId;
    return query == id ? (
        <Link href={`/dashboard/files/folders/${id}`} className='flex flex-row px-[10px] items-center py-[15px] cursor-pointer'>
            <div className='text-[20px] text-orange'>
                {icon
                    ?
                    icon
                    :
                    <MdFolder />
                }
            </div>
            <div className='pl-[17px] text-orange text-[14px]'>
                {folderName}
            </div>
        </Link>
    ) : (
        <Link href={`/dashboard/files/folders/${id}`} className='flex flex-row px-[10px] items-center py-[15px] cursor-pointer'>
            <div className='text-[20px] text-whale-killer'>
                {icon
                    ?
                    icon
                    :
                    <MdFolder />
                }
            </div>
            <div className='pl-[17px] text-whale-bowhead text-[14px]'>
                {folderName}
            </div>
        </Link>
    )
}
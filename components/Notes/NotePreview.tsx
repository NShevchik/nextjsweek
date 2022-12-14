import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

export const NotePreview = ({ name, date, note, folder }: { name: string, date: string, note: any, folder: any }) => {
    const router = useRouter();
    return (
        <Link href={`/dashboard/notes/folder/${folder.id}/${note.id}`} className={`${router.query.note === note.id ? 'border-orange' : 'border-b-whale-white'} border-2 border-transparent block hover:border-2 hover:border-x-orange`}>
            <div className='p-[15px] text-[12px]'>
                <div className='leading-[20px] pb-[5px] text-whale-bowhead'>
                    {name}
                </div>
                <div className='leading-[20px] text-whale-bowhead'>
                    {date.substring(0, 10)}
                </div>
            </div>
        </Link>
    )
}

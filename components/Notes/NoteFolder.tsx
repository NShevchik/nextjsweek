import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdFolder } from 'react-icons/md'

export const NoteFolder = ({ name, main, folder }: { name: string, main?: boolean, folder: any }) => {
    const router = useRouter();
    const [notesLength, setNotesLength] = useState('')
    useEffect(() => {
        async function getNotes() {
            await axios.get(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${folder.id}/notes`)
                .then((res) => setNotesLength(res.data.length))
        }
        return () => {
            getNotes()
        }
    }, [])

    return main ? (
        <div className='flex flex-row border-2 w-full rounded-[30px] cursor-pointer py-[15px] items-center my-[10px] border-whale-white shadow-extrasoft justify-between'>
            <div className="text-whale-killer pl-[20px] text-[20px]">
                <MdFolder />
            </div>
            <div className='text-whale-bowhead text-[13px] pl-[20px] flex-grow'>
                {name}
            </div>
            <div className='text-[13px] text-whale-bowhead pr-[20px]'>
                {length}
            </div>
        </div>
    ) : (
        <Link href={`/dashboard/notes/folder/${folder.id}`} className={router.query.id === folder.id ? 'flex flex-row w-full cursor-pointer py-[10px] items-center justify-between border-whale-white border-2 rounded-[30px]' : `flex flex-row w-full cursor-pointer py-[10px] items-center justify-between border-2 border-transparent hover:border-whale-white hover:shadow-extrasoft rounded-[30px]`}>
            <div className="text-whale-killer pl-[20px] text-[20px]">
                <MdFolder />
            </div>
            <div className='text-whale-bowhead text-[13px] pl-[20px] flex-grow'>
                {folder.name}
            </div>
            <div className='text-[13px] text-whale-bowhead pr-[20px]'>
                {notesLength}
            </div>
        </Link>
    )
}

import React, { useState } from 'react'
import { MdClose, MdDone, MdFolder } from 'react-icons/md'
import { useNotes } from '../../store/store'

export const NewFolderEditor = ({ setState }: { setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const addFolder = useNotes((state: any) => state.addFolder)
    const [value, setValue] = useState('')

    function handleClick() {
        if (value) {
            addFolder(value);
            setState(false);
        }
    }
    return (
        <div className='flex flex-row border-2 rounded-[30px] items-center my-[10px] border-whale-white justify-between py-0 w-full'>
            <div className="text-whale-bowhead pl-[20px] text-[20px] animate-pulse">
                <MdFolder />
            </div>
            <div className='pl-[20px]'>
                <input type="text" value={value} onChange={event => setValue(event.target.value)} maxLength={15} placeholder={'Folder name...'} className='border-none outline-0 text-[13px] text-whale-bowhead py-[15px] w-full' />
            </div>
            <div onClick={() => setState(false)} className='text-whale-bowhead cursor-pointer pr-[5px]'>
                <MdClose />
            </div>
            <div onClick={() => handleClick()} className='text-orange cursor-pointer pr-[10px]'>
                <MdDone />
            </div>
        </div>
    )
}

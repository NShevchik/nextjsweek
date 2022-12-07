import React from 'react'
import { MdAddCircle } from 'react-icons/md'

export const NewFolderButton = ({ callback }: { callback: VoidFunction }) => {
    return (
        <div onClick={callback} className="py-[15px] flex flex-row items-center cursor-pointer rounded-[30px] hover:bg-whale-white">
            <div className="text-whale-killer pl-[20px] text-[20px] ">
                <MdAddCircle />
            </div>
            <div className=" text-[13px]  text-whale-bowhead pl-[20px]">
                New Folder
            </div>
        </div>
    )
}
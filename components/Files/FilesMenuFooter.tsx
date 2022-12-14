import React, { useState } from 'react'
import { MdCloud } from 'react-icons/md'

export const FilesMenuFooter = () => {
    const [storage, setStorage] = useState(67.8)
    return (
        <div className='border-b-2 border-whale-white py-[44px]'>
            <div className='px-[10px]'>
                <div className='flex flex-row  items-center'>
                    <MdCloud className='text-whale-killer text-[20px]' />
                    <div className='text-whale-bowhead text-[14px] ml-[20px]'>
                        Data store
                    </div>
                </div>
                <div className='my-[25px] relative w-full'>
                    <div className={`w-[50%] h-[5px] bg-orange rounded-[5px]`}>
                    </div>
                    <div className='w-full h-[5px] bg-orange bg-opacity-25 rounded-[5px] absolute top-0 left-0'>
                    </div>
                </div>
                <div className='text-whale-bowhead text-[10px]'>
                    Used {storage} gb of 100 gb
                </div>
            </div>
        </div>
    )
}


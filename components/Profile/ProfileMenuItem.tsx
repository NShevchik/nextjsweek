import React from 'react'

export const ProfileMenuItem = ({ text, icon, borders, selected, callback }: { text: string, icon: React.ReactNode, borders?: string, selected?: boolean, callback?: void }) => {
    return selected ? (
        <div className={`w-[120px] h-[120px] text-[14px] scale-[1.15] bg-white border-none flex flex-col items-center cursor-pointer rounded-[15px] shadow-soft`}>
            <div className='pt-[30px] pb-[20px] text-[22px] text-orange'>
                {icon}
            </div>
            <div className='text-[12px] text-whale-bowhead'>
                {text}
            </div>
        </div>
    ) : (
        <div onClick={callback} className={`w-[120px] h-[120px] text-[14px] text-whale-fin border-whale-gray border-b-2 border-r-2 hover:text-orange flex flex-col items-center cursor-pointer ${borders}`}>
            <div className='pt-[30px] pb-[20px] text-[22px]'>
                {icon}
            </div>
            <div className='text-[12px]'>
                {text}
            </div>
        </div>
    )
}
export const WhiteCircle_border = ({ icon, callback, color }: { icon: React.ReactNode, callback?: any, color?: string }) => {
    return color ? (
        <div onClick={callback} className={`cursor-pointer shadow-soft text-[20px] w-[40px] h-[40px] bg-white rounded-full text-${color} flex items-center justify-center border-2 border-${color} `} >
            {icon}
        </div >
    ) : (
        <div onClick={callback} className='cursor-pointer shadow-soft text-[20px] w-[40px] h-[40px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:text-orange hover:border-orange border-2 border-whale-white' >
            {icon}
        </div >
    )
}
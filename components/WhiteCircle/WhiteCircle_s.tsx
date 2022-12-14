export const WhiteCircle_s = ({ icon, hoverBackground, select }: { icon: React.ReactNode, hoverBackground?: boolean, select?: boolean }) => {
    return hoverBackground ? (
        <div className='cursor-pointer shadow-soft text-[18px] w-[40px] h-[40px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:bg-orange hover:text-stone'>
            {icon}
        </div>
    ) :
        select
            ?
            (
                <div className='cursor-pointer shadow-soft text-[18px] w-[40px] h-[40px] bg-orange rounded-full text-stone flex items-center justify-center'>
                    {icon}
                </div>
            )
            :
            (
                <div className='cursor-pointer shadow-soft text-[18px] w-[40px] h-[40px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:text-orange'>
                    {icon}
                </div>
            )
}
export const WhiteCircle_s = ({ icon, hoverBackground }: { icon: React.ReactNode, hoverBackground?: boolean }) => {
    return hoverBackground ? (
        <div className='cursor-pointer shadow-soft text-[18px] w-[40px] h-[40px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:bg-orange hover:text-stone'>
            {icon}
        </div>
    ) :
        (
            <div className='cursor-pointer shadow-soft text-[18px] w-[40px] h-[40px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:text-orange'>
                {icon}
            </div>
        )
}
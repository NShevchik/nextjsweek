export const WhiteCircleUI = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <div className='cursor-pointer shadow-soft text-[24px] w-[50px] h-[50px] bg-white rounded-full text-whale-killer flex items-center justify-center hover:text-orange'>
            {icon}
        </div>
    )
}
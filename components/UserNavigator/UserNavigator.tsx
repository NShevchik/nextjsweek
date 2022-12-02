import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotifications, IoIosCloseCircle } from 'react-icons/io'
import { WhiteCircleUI } from '../WhiteCircle/WhiteCircleUI'

export const UserNavigator = ({ username }: { username: string }) => {
    return (
        <div className='flex flex-row items-center '>
            <FaUserCircle className='text-whale-killer text-2xl' />
            <div className='text-whale-bowhead text-[13px] mx-[20px]'>{username}</div>
            <div className='mx-[5px]'>
                <WhiteCircleUI icon={<IoIosNotifications />} />
            </div>
            <div className='ml-[5px]'>
                <WhiteCircleUI icon={<IoIosCloseCircle />} />
            </div>
        </div>
    )
}
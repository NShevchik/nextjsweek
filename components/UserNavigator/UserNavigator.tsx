import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotifications, IoIosCloseCircle } from 'react-icons/io'
import { WhiteCircle_m } from '../WhiteCircle/WhiteCircle_m'

export const UserNavigator = ({ username }: { username: string }) => {
    return (
        <div className='flex flex-row items-center '>
            <FaUserCircle className='text-whale-killer text-2xl' />
            <div className='text-whale-bowhead text-[13px] mx-[20px]'>{username}</div>
            <div className='mx-[5px]'>
                <WhiteCircle_m icon={<IoIosNotifications />} />
            </div>
            <div className='ml-[5px]'>
                <WhiteCircle_m icon={<IoIosCloseCircle />} />
            </div>
        </div>
    )
}
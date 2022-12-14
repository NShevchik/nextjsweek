import ContentLoader from 'react-content-loader'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotifications, IoIosCloseCircle } from 'react-icons/io'
import { WhiteCircle_m } from '../WhiteCircle/WhiteCircle_m'

export const UserNavigator = ({ username }: { username: string | null }) => {
    return (
        <div className='flex flex-row items-center '>
            <FaUserCircle className='text-whale-killer text-2xl' />
            <div className='text-whale-bowhead text-[13px] mx-[20px]'>
                {username ?
                    username
                    :
                    <div className=' h-[10px] w-[70px] bg-[#f3f3f3]'>

                    </div>
                    // <ContentLoader
                    //     speed={2}
                    //     width={70}
                    //     height={10}
                    //     viewBox="0 0 70 10"
                    //     backgroundColor="#f3f3f3"
                    //     foregroundColor="#ecebeb"
                    //     uniqueKey="skeleton-username"
                    // >
                    //     <rect x="0" y="0" rx="5" ry="5" width="70" height="10" />
                    // </ContentLoader>
                }
            </div>
            <div className='mx-[5px]'>
                <WhiteCircle_m icon={<IoIosNotifications />} />
            </div>
            <div className='ml-[5px]'>
                <WhiteCircle_m icon={<IoIosCloseCircle />} />
            </div>

        </div>
    )
}
import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { MdStar } from 'react-icons/md'
import { useEmails } from '../../store/store'
import { IEmail } from '../../types/types'
import { WhiteCircle_s } from '../WhiteCircle/WhiteCircle_s'

export const EmailPreview = ({ email }: { email: IEmail }) => {
    const setSelected = useEmails((state) => state.setSelected)
    const setFavorite = useEmails((state) => state.setFavorite)

    function setDateInEmail(time: string) {
        const dateFromJSON: Date = new Date(time);
        const today: Date = new Date()
        const raznice = ((Number(dateFromJSON) - Number(today)) / 86000000) * 24
        if (raznice < -24) {
            const norm = raznice * (-1) / 24;
            if (norm > 20) {
                return `${time.slice(8, 10)}.${time.slice(5, 7)}.${time.slice(0, 4)}`
            } else {
                return `${norm.toFixed()} day(s) ago`
            }
        } else {
            return time.slice(11, 16)
        }
    }
    return (
        <div className=' bg-stone flex flex-row text-[14px] justify-between items-center py-[10px] px-[20px] rounded-[30px] my-[5px] cursor-pointer'>
            <div className='text-[24px] text-whale-killer flex flex-row items-center' >
                {
                    email.selected
                        ?
                        <HiCheckCircle className='text-orange' onClick={() => setSelected(email.emailId)} />
                        :
                        <HiCheckCircle className='hover:text-orange' onClick={() => setSelected(email.emailId)} />
                }
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full  ml-[16px]'>
                    <img src={email.userPhoto} />
                </div>
            </div>
            <div className='flex flex-row items-center w-[60%] px-[25px] flex-grow '>
                <div className='text-whale-blue pr-[25px]'>
                    {email.sender}
                </div>
                <div className='text-whale-bowhead pr-[25px] max-w-[150px]  text-ellipsis overflow-hidden whitespace-nowrap'>
                    {email.theme}
                </div>
                <div className='text-whale-killer w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                    {email.text}
                </div>
            </div>
            <div className='pr-[15px] text-whale-bowhead text-[12px]'>
                {setDateInEmail(email.sentDate)}
            </div>
            <div >
                {
                    email.favorite
                        ?
                        <div onClick={() => setFavorite(email.emailId)}><WhiteCircle_s icon={<MdStar />} hoverBackground={false} select={true} /></div>
                        :
                        <div onClick={() => setFavorite(email.emailId)}><WhiteCircle_s icon={<MdStar />} hoverBackground={true} /></div>
                }
            </div>
        </div>
    )
}
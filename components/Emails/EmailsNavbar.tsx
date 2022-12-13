import React from 'react'
import { IoMdAlert, IoMdDocument, IoMdSettings, IoMdTrash } from 'react-icons/io'
import { MdAccessTimeFilled, MdInbox, MdLabel } from 'react-icons/md'
import EmailsNavbarItem from './EmailsNavbarItem'
import { FaTelegramPlane } from 'react-icons/fa'

export const EmailsNavbar = () => {
    return (
        <div className='flex flex-col'>
            <EmailsNavbarItem text={'Inbox'} icon={<MdInbox />} />
            <EmailsNavbarItem text={'Pending Emails'} icon={<MdAccessTimeFilled />} />
            <EmailsNavbarItem text={'Sent Emails'} icon={<FaTelegramPlane />} />
            <EmailsNavbarItem text={'Drafts'} icon={<IoMdDocument />} />
            <EmailsNavbarItem text={'Spamming'} icon={<IoMdAlert />} />
            <EmailsNavbarItem text={'Trash'} icon={<IoMdTrash />} />
            <EmailsNavbarItem text={'Labels'} icon={<MdLabel />} />
            <EmailsNavbarItem text={'Settings'} icon={<IoMdSettings />} />
        </div>
    )
}

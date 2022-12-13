import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { IoMdAlert, IoMdMailOpen } from 'react-icons/io'
import { MdDone, MdFireExtinguisher, MdFolder, MdForward, MdLabel, MdMail } from 'react-icons/md'
import { RiFlagFill } from 'react-icons/ri'
import { EmailsPageHeaderItem } from './EmailsPageHeaderItem'

export const EmailsPageHeader = () => {
    return (
        <div className='flex flex-row justify-between'>
            <EmailsPageHeaderItem text={'Select'} icon={<HiCheckCircle />} />
            <EmailsPageHeaderItem text={'Forward'} icon={<MdForward />} />
            <EmailsPageHeaderItem text={'Spam'} icon={<IoMdAlert />} />
            <EmailsPageHeaderItem text={'Read'} icon={<IoMdMailOpen />} />
            <EmailsPageHeaderItem text={'Label'} icon={<MdLabel />} />
            <EmailsPageHeaderItem text={'Folder'} icon={<MdFolder />} />
            <EmailsPageHeaderItem text={'Fix'} icon={<RiFlagFill />} />
        </div>
    )
}

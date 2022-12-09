import React from 'react'
import { CgCalendar, CgPlayListCheck } from 'react-icons/cg'
import { MdCalendarToday } from 'react-icons/md'
import { RiDashboardFill } from 'react-icons/ri'
import TasksHeaderItem from './TasksHeaderItem'

const TasksHeader = () => {
    return (
        <div className='border-b-2 border-whale-gray'>
            <div className='px-[50px] flex flex-row'>
                <TasksHeaderItem icon={<CgPlayListCheck />} text={'List Tasks'} />
                <TasksHeaderItem icon={<RiDashboardFill />} text={'Boards'} />
                <TasksHeaderItem icon={<MdCalendarToday />} text={'Calendar'} />
            </div>
        </div>
    )
}

export default TasksHeader
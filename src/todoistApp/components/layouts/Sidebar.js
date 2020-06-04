import React from 'react'
import { FaChevronDown, FaInbox, FaCalendar, FaCalendarAlt } from "react-icons/fa"
export const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <ul className="sidebar__generic">
                    <li><span><FaInbox /></span><span>Inbox</span></li>
                    <li><FaCalendar /><span>Today</span></li>
                    <li> <FaCalendarAlt /><span>Next 7 Days</span> </li>
                </ul>
            </div>
            <div className="sidebar__middle">
                <span><FaChevronDown /></span> <h2> Projects</h2>
                <ul><li> New Projects Will be added here</li></ul>
            </div>

        </div>
    )
}



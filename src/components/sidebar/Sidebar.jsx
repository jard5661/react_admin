import React from 'react'
import './Sidebar.css'
import { 
Home, 
Timeline,
TrendingUp,
PersonPinCircle,
CategoryOutlined,
Receipt,
ReportOutlined,
Mail,
Feedback,
MessageSharp,
Report} from '@material-ui/icons';
import {Link} from 'react-router-dom'; 

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"></Home>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"></Timeline>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"></TrendingUp>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className='sidebarList'>
                    <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                            <PersonPinCircle className="sidebarIcon"></PersonPinCircle>
                            User
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <CategoryOutlined className="sidebarIcon"></CategoryOutlined>
                            Product
                        </li>
                        <li className="sidebarListItem">
                            <Receipt className="sidebarIcon"></Receipt>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarIcon"></ReportOutlined>
                            Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <Mail className="sidebarIcon"></Mail>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"></Feedback>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageSharp className="sidebarIcon"></MessageSharp>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon"></Home>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"></Timeline>
                            Anlytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"></Report>
                            Report
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

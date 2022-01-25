import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './Topbar.css';


export default function Topbar() {
    return (
        <div className = "topbar">
            <div className='topbarWraper'>
                <div className="topLeft">
                    <span className='logo'>Jard Admin</span>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                        <NotificationsNone></NotificationsNone>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language></Language>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings></Settings>
                    </div>
                    <img src="https://placeimg.com/640/480/people" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import "./topbar.css"
import doc from "../../assets/doc.jpg"
import {NotificationsNone, Language,Settings} from '@material-ui/icons';


export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className='topLeft'><span className="logo">E-psy</span></div>
            <div className='topRight'>
                <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
              <Settings />
              
                </div>
                <img src={doc} alt="" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
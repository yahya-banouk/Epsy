import React from 'react'
import "./sidbar.css"
import {LineStyle, InsertInvitation,  AccountCircle, } from "@material-ui/icons"
import {Link} from "react-router-dom";
import { Logout } from '@mui/icons-material';

export default function SidbarPatient() {
  


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to="/patient"> 
            
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Home

                </li></Link>
                <Link to="/suivi"> 
            
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Suivi

                </li></Link>
                
                <li className="sidebarListItem">
                  <AccountCircle className="sidebarIcon"/>
                  profile
                </li>
                
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                
                 <li className="sidebarListItem" >

                  <InsertInvitation className="sidebarIcon"/>
                 My appointements
                </li>
                
                
            </ul>
        </div>
        
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                
               
            <Link to='/'>
                <li className="sidebarListItem">
                  <Logout className="sidebarIcon"/>
                  Logout
                  
                </li></Link>
                
            </ul>
        </div>
      </div>
      
    </div>
  )
}

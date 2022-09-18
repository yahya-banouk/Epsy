import React from 'react'
import "./sidbar.css"
import {LineStyle, InsertInvitation, People} from "@material-ui/icons"
import {Link} from "react-router-dom";
import { Logout } from '@mui/icons-material';


export default function Sidbar() {


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to="/doctor"> 
            
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Home

                </li></Link>
                
                
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
            <Link to="/patientsList"> <li className="sidebarListItem" >
            
                  <People className="sidebarIcon"/>
                  Patients
                </li></Link>
                
                <Link to="/redezVousList"> <li className="sidebarListItem" >

                  <InsertInvitation className="sidebarIcon"/>
                 Invitations
                </li></Link>
                
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

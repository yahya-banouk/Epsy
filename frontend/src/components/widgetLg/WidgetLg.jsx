import React from 'react'
import {useEffect, useState} from 'react';
import doc from '../../assets/doc.jpg'
import "./widget.css"
import axios from "axios"
import AppointementService from '../../services/AppointementService';


export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}> {type}</button>
  }
  const [appointements, setAppointements]=useState([]);

  useEffect(() => {

    getLatestAppointements();
}, [])

const getLatestAppointements = () => {
    AppointementService.getLatestAppointements().then((response) => {
        setAppointements(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}




  
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Appointement</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>

       
        {
           
            appointements.map(
              appointement =>
              <tr className="widgetLgTr">
          <td className="widgetLgPatient">
            <img src={doc} alt="" className="widgetLgImage" />
            <span className="widgetLgName"> {appointement.nom}
            </span>
            <span className="widgetLgName"> 
            {appointement.prenom}</span></td>
            <td className="widgetLgDate"> {appointement.date}</td>
           
            <td className="widgetLgStatus"> <Button type="Approved"/></td>

          
            </tr>  
        
            )}
            
      </table>
    </div>)
  
}

import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"
import doc from "../../assets/doc.jpg"
import {useEffect, useState} from 'react';
import PatientService from '../../services/PatientService';

export default function WidgetSm() {
    const [newJoined, setNewJoined]=useState([]);

    useEffect(() => {

      getNewMembers();
  }, [])

  const getNewMembers = () => {
      PatientService.getNewMembers().then((response) => {
          setNewJoined(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }



    
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle"> New Join Members</span>
        

        <ul className="widgetSmList">
            {
               newJoined.map(
                    newPatient =>
            <li className="widgetSmListItem">
                <img src={doc} alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">{ newPatient.nom}</span>
                    <span className="widgetSmPatientName">{newPatient.prenom}</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' />
    Display
</button>
            </li>)}
            
        
        </ul>
    </div>
  )
}

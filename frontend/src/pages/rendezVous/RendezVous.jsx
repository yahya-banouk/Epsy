import React from 'react'
import Topbar from "../../components/topbar/Topbar"
import Sidbar from "../../components/sidbar/Sidbar"
import doc from "../../assets/doc.jpg"
import "./rendezVous.css"
import AppointementService from "../../services/AppointementService";
import { DataGrid } from '@mui/x-data-grid';
import {Link,  useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios"


export default function RendezVous() {
  const [allAppointements, setAllAppointements]=useState([]);
  const history = useNavigate();
  

  useEffect(() => {

       
    getRendezVousNotificationByDoctor();
}, [])

const getRendezVousNotificationByDoctor = () => {
    AppointementService.getRendezVousNotificationByDoctor().then((response) => {
        setAllAppointements(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}

  const isConfirmedField = (appointement) =>{
    

 const body= {
    "date": appointement.date,
    "idPatient":appointement.idPatient,
    
  }

   AppointementService.acceptAppointement(body);
   history('/doctor');
   
  }



  const isNotConfirmedField =  (appointement) =>{
    console.log(appointement.date)

 const body= {
    "date": appointement.date,
    "idPatient":appointement.idPatient,
    
  }
  AppointementService.denyAppointement(body);
  history('/doctor');
  
   
  }


  
  
  

  





  
  return (
    <div>
      <Topbar/>
      <div className="homePatient">
        <Sidbar/>
      
    <div className="rendezVousList">
      
       <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>date</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>


                        {
                                allAppointements.map(
                                   appointement =>
                                    <tr key={appointement.email}>
                                      <td><img src={doc} alt="" className="patientListImage" /></td>
                                        <td>{appointement.nom}  </td>
                                        <td>{appointement.prenom}</td>
                                        <td>{appointement.date}</td>
                                        <td>
                                        <div className="actionsButtons">
         
          <button className="acceptButton" onClick = {() => {isConfirmedField(appointement);}} >Accept</button>
          <button className="refuseButton" onClick = {() => {isNotConfirmedField(appointement);
          }}>Refuse</button>

          </div>
                                        </td>

                                    </tr>
                                )
                            }


                        </tbody>
                        </table>
</div>
    
    </div>
    </div>
    </div>
    
  )
}

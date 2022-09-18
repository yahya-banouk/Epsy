import React from 'react'
import {useEffect, useState} from 'react'
import "./patientList.css"
import doc from "../../assets/doc.jpg";

import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import PatientService from '../../services/PatientService';
import Topbar from '../../components/topbar/Topbar';
import Sidbar from '../../components/sidbar/Sidbar';

export default function PatientList(){
  const [patients, setPatients] = useState([])

  useEffect(() => {

      listPatient();
  }, [])

  const listPatient = () => {
      PatientService.listPatient().then((response) => {
          setPatients(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
      
  return (
    <div>
      <Topbar/>
      <div className='homeDoc'>
        <Sidbar/>
      
    <div className='patientsList'>
       <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Tel</th>
                                <th>Cin</th>
                                <th>Sexe</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(
                                   patient =>
                                    <tr key={patient.email}>
                                      <td><img src={doc} alt="" className="patientListImage" /></td>
                                        <td>{patient.nom}  </td>
                                        <td>{patient.prenom}</td>
                                        <td>{patient.email}</td>
                                        <td>{patient.tel}</td>
                                        <td>{patient.cin}</td>
                                        <td>{patient.sex}</td>
                                        <td>
                                        <Link to={"/patientProfile/"+patient.email}>
              <button className="ButtonpatientList">See More</button></Link>
                                        </td>

                                    </tr>
                                )
                            }


                        </tbody>
                        </table>


    </div>
    
 
    </div>
    </div>
    </div>)
  
}
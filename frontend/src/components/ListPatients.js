import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PatientService from '../services/PatientService'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

const ListPatients = () => {

    const [patients, setPatients] = useState([])

    useEffect(() => {

        getPatients();
    }, [])

    const getPatients = () => {
        PatientService.getPatients().then((response) => {
            setPatients(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deletePatient = (patientId) => {
       PatientService.deletePatient(patientId).then((response) =>{
        getPatients();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div>
            <HeaderComponent/>
            <div style = {{margin:"20px"}}>
        <h2 className='text-center'>Patients List</h2>
        
            <button className='btn btn-outline-primary mb-2'><a  href="/add-patient" >Add Patient</a></button>
        
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Cin</th>
                        <th>Situation</th>
                        <th>Date of birthday</th>
                        <th>Gender</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(
                            patient =>
                            <tr key={patient.email}>
                                <td>{patient.nom}</td>
                                <td>{patient.prenom}</td>
                                <td>{patient.email}</td>
                                <td>{patient.tel}</td>
                                <td>{patient.cin}</td>
                                <td>{patient.situation}</td>
                                <td>{patient.dateNaissance}</td>
                                <td>{patient.sex}</td>
                                <td>
                                <Link className="btn btn-info" to={`/update-patient/${patient.email}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deletePatient(patient.email)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
        <FooterComponent/>
        </div>
    )
}

export default ListPatients
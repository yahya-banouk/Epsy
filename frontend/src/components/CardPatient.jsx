import React,{useState, useEffect} from 'react'
import "./cardPatient.css"
import {Link, useNavigate} from "react-router-dom";
import doc from "../assets/doc.jpg"
import DoctorService from '../services/DoctorService';



export default function CardPatient() {
    
    const [doctors, setDoctors] = useState([])
    

    
    useEffect(() => {

       
        getDoctors();
    }, [])
  
    const getDoctors = () => {
        DoctorService.getDoctors().then((response) => {
            setDoctors(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    
  return (
    <div>
    <div className="search">
        <form>
        <input type="text" name="searchBar" id="searchBar"    placeholder="Type..." className="inputText"/>
        <input type="submit" name="" value="Search" className="inputSubmit" />
        </form>
        </div>
        
    <div className="cardsPatient">
    {
                               doctors.map(
                                   doctor =>
        
    <div className="cardPatient">
        <div className="upper-container">
            <div className="image-container">
            <img src={doc} alt="" height="100px" width="100px" className="imgImage"/>
             </div>
        </div>
        <div className="lower-container">
            <h3> {doctor.nom}{doctor.prenom}</h3>
            <h3>{doctor.email}</h3>
            <h4>{doctor.specialite}</h4>
            

            <Link to={`/makeAppointement/${doctor.email}`}> <button className="btn btn-outline-primary mt-3 ml-3">Make an appointement</button> </Link> 
            </div>
            </div>
            )
    }
    
    </div>
    </div>
    
    




  )
}
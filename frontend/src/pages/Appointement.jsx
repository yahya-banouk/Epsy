import React from 'react'
import "./appointement.css"
import {PermIdentity, AlternateEmail, LocalPhone ,Wc , CalendarToday } from "@material-ui/icons" 
import {useEffect, useState} from 'react'
import axios from "axios"
import doc from"../assets/doc.jpg"
import { useNavigate, useParams,Link} from "react-router-dom";
import Calendar from 'react-calendar'
import DoctorService from '../services/DoctorService'
import { Button } from '@material-ui/core'
import AppointementService from '../services/AppointementService'

export default function Appointement() {
  const history = useNavigate();
  const {email} = useParams();
  console.log(email)

  const idDoctor = email;
  const [date, setDate] = useState(new Date())
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [tel, setTel] = useState('')
  const [cin,setCin]=useState('')
  const [specialite,setSpecialite ] = useState('')
  const idPatient =""

  const onChange = date=>{
    setDate(date);
  }
  const saveAppoinetemnt = (e) => {
    e.preventDefault();

    const appointement = {idDoctor, date}

    console.log(date)
        AppointementService.sendAppointement(appointement).then((response) => {
            history('/patient')
        }).catch(error => {
            console.log(error)
        })

    
    
}
  

  
  useEffect(() => {

    DoctorService.getDoctorById(email).then((response) =>{
        setNom(response.data.nom)
        setPrenom(response.data.prenom)
        setTel(response.data.tel)
        setSpecialite(response.data.specialite)
        

    }).catch(error => { 
        console.log(error)
    })
}, [])

  




  return (
    <div className="patientProfile">
      <div className="patientTitleContainer">
        <h1 className="patientTitle">appointement's informations</h1>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowTop">
            <img src={doc} alt=""  className="patientShowImg"/>

            <div className="patientShowTopTitle">
              <span className="patientShowUserName">{prenom} {nom}</span>
              <span className="patientShowUserMaladie"></span>
            </div>
          </div>
          <div className="patientShowBottom"><span className="patientShowTitle">Appointemant Details</span>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle"> Dr {prenom} {nom}</span>
          </div>
          <div className="patientShowInfo">
          <AlternateEmail className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {email}</span>
          </div>
          <div className="patientShowInfo">
          <LocalPhone className="patientShowIcon" />
          <span className="patientShowInfoTitle">{tel}</span>
          </div>
          <div className="patientShowInfo">
          <CalendarToday className="patientShowIcon" />

          <input type="date" onChange={e=>setDate(e.target.value)}/>
          </div>
          <div className="patientShowInfo">
          <CalendarToday className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {specialite}</span>
          </div>
          <div className="patientShowInfo">
          <Link to={'/patient'}> <button className="btn btn-outline-primary mt-3 ml-3" onClick = {(e) => saveAppoinetemnt(e)}>Send</button> </Link> 
          </div>
          </div>

        </div>
      </div>
      
      
    </div>
  )
}
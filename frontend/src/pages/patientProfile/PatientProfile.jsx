import React from 'react'
import "./patientProfile.css"
import "../../components/patienthome.css"
import {PermIdentity, AlternateEmail, LocalPhone ,Wc , CalendarToday } from "@material-ui/icons" 
import {useEffect, useState} from 'react'
import axios from "axios"
import doc from "../../assets/doc.jpg"
import { useNavigate, useParams} from "react-router-dom";
import PatientService from '../../services/PatientService'
import Topbar from '../../components/topbar/Topbar'
import Sidbar from '../../components/sidbar/Sidbar'
import Analytics from '../Analytics/Analytics'
import AnalyticsStress from '../Analytics/AnalyticsStress'
import AnalyticsFatigue from '../Analytics/AnalyticsFatigue'
import AnalyticsSommeil from '../Analytics/AnalyticsSommeil'

export default function PatientProfile() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [cin, setCin] = useState('')
  const [tel, setTel] = useState('')
  const [dateNaissance, setDateNaissance] = useState('')
  const [sex, setSex] = useState('')
  const [situation, setSituation] = useState('')
  
  const history = useNavigate();
  const {email} = useParams();
  console.log(email)

  const [patients, setPatients]=useState([]);
  useEffect(() => {

    getPatients();
}, [])

const getPatients = () => {
    PatientService.getPatientById(email) .then((response => {
      setNom(response.data.nom)
      setPrenom(response.data.prenom)
      
      setTel(response.data.tel)
      setCin(response.data.cin)
      setDateNaissance(response.data.dateNaissance)
      setSex(response.data.sex)
      setSituation(response.data.situation)
      

      console.log(nom);
    })
    ).catch((e)=> console.log(e));
  }
  





  return (
    <div>
      <Topbar/>
      <div className="homePatient">
        <div>
        <Sidbar/>
        </div>
       
      
    <div className="patientProfile">
      <div className="patientTitleContainer">
        <h1 className="patientTitle">Patient's Profile</h1>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowTop">
            <img src={doc} alt=""  className="patientShowImg"/>

            <div className="patientShowTopTitle">
              <span className="patientShowUserName">{prenom} {nom}</span>
              <span className="patientShowUserMaladie">Depression</span>
            </div>
          </div>
          <div className="patientShowBottom"><span className="patientShowTitle">Account Details</span>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{prenom} {nom}</span>
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
          <span className="patientShowInfoTitle"> {dateNaissance}</span>
          </div>
          <div className="patientShowInfo">
          <Wc className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {sex}</span>
          </div>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{situation} </span>
          </div>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{cin} </span>
          </div>
          </div>

        </div>
      </div>
      <div className="patientTitleContainer">
        <h1 className="patientTitle">Patient's Analytics</h1>
      </div>
      <div className="patientTitleContainer">
        <h5 className="patientTitle">Tristesse</h5>
      </div>
      
      <div>
      <Analytics/>
    </div>
    <div className="patientTitleContainer">
        <h5 className="patientTitle">Stress</h5>
      </div>
    <div>
      <AnalyticsStress/>
    </div>
    <div className="patientTitleContainer">
        <h5 className="patientTitle">Fatigue</h5>
      </div>
    <div>
      <AnalyticsFatigue/>
    </div>
    <div className="patientTitleContainer">
        <h5 className="patientTitle">Sommeil</h5>
      </div>
    <div>
      <AnalyticsSommeil/>
    </div>
    </div>

   
    </div>
    
    </div>
  )
}

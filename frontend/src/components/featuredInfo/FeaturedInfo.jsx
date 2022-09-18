import React from 'react'
import "./featuredInfo.css"
import {ArrowUpward, ArrowDownward} from '@material-ui/icons'
import {useEffect, useState} from 'react';
import axios from "axios"
import AppointementService from '../../services/AppointementService';
import PatientService from '../../services/PatientService';

export default function () {
    const [appointementCount, setAppointementCount]=useState([]);
    const [invitationsCount, setInvitationsCount]=useState([]);
    const [patientsCount, setPatientsCount]=useState([]);

    useEffect(() => {

      getAppointementCount();
  }, [])

  const getAppointementCount = () => {
      AppointementService.getAppointementCount().then((response) => {
          setAppointementCount(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  useEffect(() => {

    getInvitationsCount();
}, [])

const getInvitationsCount = () => {
    AppointementService.getInvitationsCount().then((response) => {
        setInvitationsCount(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}
  
useEffect(() => {

  getPatientsCount();
}, [])

const getPatientsCount = () => {
  PatientService.getPatientsCount().then((response) => {
      setPatientsCount(response.data)
      console.log(response.data);
  }).catch(error =>{
      console.log(error);
  })
}


  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Patients</span>

            { 
               patientsCount.map(
                    pat =>
                    <div>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{pat.count}</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
            )}
        </div>

        <div className="featuredItem">
        <span className="featuredTitle">Appointements</span>
        { 
               appointementCount.map(
                    apt =>
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{apt.count}</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
            )}
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Invitations</span>
            { 
               invitationsCount.map(
                    inv =>
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{inv.count}</span>
                <span className="featuredPatientRate">
                    
                -13<ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
            )}
        </div>
    </div>
  )
}

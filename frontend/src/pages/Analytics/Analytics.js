import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import {useEffect, useState} from 'react';
import { useNavigate, useParams} from "react-router-dom";

import SuiviService from "../../services/SuiviService"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,

)
const Analytics = () =>  {
    const [fatigueSuivi, setFatigueSuivi]= useState([])
    const [sommeilSuivi, setSommeilSuivi]= useState([])
    const [tristesseSuivi, setTristesseSuivi]= useState([])
    const [stressSuivi,setStressSuivi]= useState([])
    const {email} = useParams();
    const idPatient = email;
    const patient ={email:email}
    

    
    useEffect(() => {

        getTristesse();
    }, [])

  
    const getTristesse = () => {
        SuiviService.getTristesse(patient).then((response) => {
            console.log(response.data);
            console.log("tristess log"+tristesseSuivi);
            try {
                setTristesseSuivi(response.data)
            console.log("count "+tristesseSuivi);
            } catch (error) {
                
                console.log("erreurrr"+error)
            }
            
           

        }).catch(error =>{
            console.log(error);
        })
    }
    
    useEffect(() => {

        getFatigueSuiviCount();
    }, [])
  
    const getFatigueSuiviCount = (patient) => {
        SuiviService.getFatigue().then((response) => {
            setFatigueSuivi(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {

        getsommeilSuiviCount();
    }, [])
  
    const  getsommeilSuiviCount = () => {
        SuiviService.getSommeil().then((response) => {
            setSommeilSuivi(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    useEffect(() => {

        getstressSuiviCount();
    }, [])
  
    const getstressSuiviCount = () => {
        SuiviService.getStress().then((response) => {
            setStressSuivi(response.data)
            console.log(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }
   
    
    const labels= tristesseSuivi.map(value => value.sentiment)
    const data ={
        labels,
        datasets:[
            {
                data:tristesseSuivi.map(value =>value.count),
                backgroundColor:'rgba(203, 243, 238, 0.5)'
            },
           
        ]
    }
  var  options= {
    plugins: {
        title: {
            display: true,
            text: 'Patient Tristesse'
        }
    },
    maintainAspectRatio: false,

        scales: {
            y: {
                ticks: {
                    stepSize: 1
                  },
                beginAtZero: true
            }
        },
        legend:{
            labels:{
                fontsize:10
            }

        }
        
    }

  return (
    <div>
<Bar 
data={data}
height={400}
options={options}


/>
    </div>
  )
}
export default Analytics
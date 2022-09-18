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
const AnalyticsStress = () =>  {
    
    const [stressSuivi,setStressSuivi]= useState([])
    const {email} = useParams();
    const patient ={email:email}
    

    
    
    
    
    useEffect(() => {

        getStress();
    }, [])
  
    const getStress = () => {
        SuiviService.getStress(patient).then((response) => {
            setStressSuivi(response.data)
            console.log(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }
   
    
    const labels= stressSuivi.map(value => value.sentiment)
    const data ={
        labels,
        datasets:[
            {
                data:stressSuivi.map(value =>value.count),
                backgroundColor:'rgba(203, 243, 213, 0.5)'
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
export default AnalyticsStress
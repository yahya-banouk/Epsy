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
const AnalyticsSommeil  = () =>  {
    
    const [sommeilSuivi,setSommeilSuivi]= useState([])
    const {email} = useParams();
    const patient ={email:email}
    

    
    
    
    
    useEffect(() => {

        getSommeil();
    }, [])
  
    const getSommeil = () => {
        SuiviService.getSommeil(patient).then((response) => {
            setSommeilSuivi(response.data)
            console.log(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }
   
    
    const labels= sommeilSuivi.map(value => value.sentiment)
    const data ={
        labels,
        datasets:[
            {
                data:sommeilSuivi.map(value =>value.count),
                backgroundColor:'rgba(199, 197, 245, 0.5)'
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
export default AnalyticsSommeil 
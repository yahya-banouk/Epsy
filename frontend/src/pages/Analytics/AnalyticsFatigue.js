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
const AnalyticsFatigue = () =>  {
    
    const [fatigueSuivi,setFatigueSuivi]= useState([])
    const {email} = useParams();
    const patient ={email:email}
    

    
    
    
    
    useEffect(() => {

        getFatigue();
    }, [])
  
    const getFatigue = () => {
        SuiviService.getFatigue(patient).then((response) => {
            setFatigueSuivi(response.data)
            console.log(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }
   
    
    const labels= fatigueSuivi.map(value => value.sentiment)
    const data ={
        labels,
        datasets:[
            {
                data:fatigueSuivi.map(value =>value.count),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
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
export default AnalyticsFatigue
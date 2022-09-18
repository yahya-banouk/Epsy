import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
        {
          name: 'Janvier',
          "Active User": 4000,
          
        },
        {
          name: 'Fevrier',
          "Active User": 3000,
          
        },
        {
          name: 'Mars',
          "Active User": 2000,
          
        },
        {
          name: 'Avril',
          "Active User": 2780,
          
        },
        {
          name: 'Mai',
          "Active User": 1890,
         
        },
        {
          name: 'Juin',
          "Active User": 1390,
          
        },
        {
          name: 'Juillet',
          "Active User": 3490,
         
        },
        {
            name: 'Aout',
            "Active User": 3490,
           
          },
          {
            name: 'septembre',
            "Active User": 2490,
           
          },
          {
            name: 'Novembre',
            "Active User": 3490,
           
          },
          {
            name: 'Decembre',
            "Active User": 1490,
           
          },
      ];
  return (
    <div className='chart'>
      <h3 className="chartTitle">Patients Analytics</h3>
      <ResponsiveContainer  width="100%" aspect={4 / 1}>
        <LineChart
         data={data}
        >
            <XAxis dataKey="name" stroke='#5550bd'></XAxis>
            <Line type="monotone" dataKey="Active User" stroke='#5550bd'/> 
            <Tooltip />
            <CartesianGrid stroke="#e0fdfd" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

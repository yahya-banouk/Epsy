import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Sidbar from '../../components/sidbar/Sidbar'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
  return (
    <div>
      <Topbar/>
      
    <div className='homeDoc'>
    <Sidbar/>
    <div className='home'>
    
      <FeaturedInfo />
      <Chart   title="Patients Analytics" grid dataKey="Active User"/>
      <div className="homeWIdgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
    </div>
    </div>
  )
}

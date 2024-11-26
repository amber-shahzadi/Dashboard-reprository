import React, { useState } from 'react'
import SideBar from './Dashboard/SideBar'
import MainDashboard from './Dashboard/MainDashboard'
import SmallCharts from './Dashboard/SmallCharts'
import ReCharts from './Dashboard/rightside'



export default function ProjectDash() {
  const [sideBarToggle, setSideBarToggle] = useState(false)
 
  return (
    <div className=' flex flex-col md:flex-col lg:flex-row md:gap-2 bg-slate-200 '>
        <SideBar sideBarToggle={sideBarToggle}   />
        <MainDashboard sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}   />
        <SmallCharts/>
        <ReCharts/>
      
        </div>
     
      
    
  )
}

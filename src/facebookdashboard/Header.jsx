import React from 'react'
import { RiCalendar2Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import SmallCard from './Card';
import Chart from './Chart';


export default function Header (){
  return (
    <header className='bg-slate-300 border rounded-xl w-[100%] lg:w-[60%] border-pink-600 lg:h-[650px] mx-auto my-8'>
        <div className='ml-2 py-3'>
    
    <h1 className= ' hover:bg-slate-500 hover:text-white rounded-md w-fit py-1 px-2'>Facebook Ads Dashboard</h1>
    <div className='flex gap-3'>
   <div className= 'border-x-orange-900 border rounded h-15 w-52 align-middle bg-white '>
    <p className='font-medium text-sm text-gray-400 ml-2'>Auto Date Range</p>
    <span className='flex gap-1 text-sm font-bold'><RiCalendar2Line className=' ml-2 mt-1'/>Last three months</span>
   </div>
   <div className= 'border-x-orange-900 border rounded h-15 w-44 bg-white'>
    <p className='font-medium text-sm text-gray-400 ml-2'>Services</p>
    <span className= 'ml-2 flex text-sm font-bold' >All<FaCaretDown className='ml-32 mt-1'/></span>
   </div>
   <div className= 'border-x-orange-900 border rounded h-15 w-44 text-left bg-white'>
    <p className='font-medium text-sm text-gray-400 ml-2'>Post</p>
     <span className= 'ml-2 flex  text-sm font-bold' >All<FaCaretDown className='ml-32  mt-1'/></span>

   </div>
   </div>
   </div>
   <div >
    <SmallCard/>
    <Chart/>
   </div>
   
  
    </header>

  )
}
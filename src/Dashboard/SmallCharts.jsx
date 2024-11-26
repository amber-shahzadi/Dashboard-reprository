import React from 'react'

export default function SmallCharts() {
  return (
    <div className="flex flex-col sm:w-full sm:text-center lg:w-[50%] mx-auto mt-20 gap-2 ">
    <div className='border bg-white px-3 py-2 '>
  <p className='font-bold text-lg'>Website Traffice</p>
  <p>Total Website Traffic</p>
  <p className='text-emerald-500'><span className='mr-28 font-bold text-lg text-black'>9 634</span>19.5% </p>
  <p>Social Media Refferal Traffic</p>
  <p className='text-emerald-500'><span className='font-bold mr-32 text-lg  text-black'>659</span>4.8%</p>
  <p>% Social Media Referrel Traffic</p>
  <p className='font-bold text-lg'>6,8%</p>
  </div>
  <div className='border bg-white px-3 py-2'>
  <p  className='font-bold text-lg'>Site Revenue</p>
  <p>Total Site Revenue</p>
  <p className='text-emerald-500 mr-2'><span  className='mr-24 font-bold text-lg text-black'>10 545 $</span>9.3%</p>
  <p>Social Media Site Revenue</p>
  <p className='text-emerald-500'><span className='font-bold mr-28 text-lg  text-black'>395 $</span>4.8%</p>
  <p>% Social Media Site Revenue</p>
  <p  className='font-bold text-lg'>3,7%</p>
  </div>
  </div>
  )
}

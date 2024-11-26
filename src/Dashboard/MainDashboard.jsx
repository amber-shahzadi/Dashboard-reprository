import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";

export default function MainDashboard({sideBarToggle, setSideBarToggle}) {
 
  const data = [
    {
      icon: <FaFacebookF className="my-2 h-9 w-9 bg-blue-900 text-white border mx-auto pt-1 hover:scale-125" />,
      value: "250",
      percentage: "12%",
      person: "Fans Count",
    },
    {
      icon: <FaTwitter className="my-2 h-9 w-9 font-extrabold text-sky-400 mx-auto pt-1 hover:scale-150"/>,
      value: "245",
      percentage: "-2%",
      person: "Followers",
    },
    {
      icon: <FaYoutube className="my-2 h-9 w-9 font-extrabold text-red-600 mx-auto pt-1 hover:scale-150" />,
      value: "220",
      percentage: "16%",
      person: "Subscribers",
    },

    {
      icon: <ImLinkedin2 className="my-2 h-9 w-9 bg-cyan-600 text-white border mx-auto p-1 hover:scale-125"/>,
      value: "26",
      percentage: "-4%",
      person: "Followers",
    },
    {
      icon: <FaPinterest className="my-2 h-9 w-9 font-extrabold text-red-600 mx-auto pt-1 hover:scale-150" />,
      value: "123",
      percentage: "17%",
      person: "Followers",
    },
    {
      icon: <FaInstagram className="my-2 h-9 w-9 font-extrabold  mx-auto p-1 hover:scale-125" style={{background: 'linear-gradient(to right,red,blue,green)'}} />,
      value: "270",
      percentage: "15%",
      person: "Followers",
    },
  ];

  return (
    <header className= 'md:h-1vh align-middle lg:w-full'>
      <div className="flex p-3 relative sm:justify-center ">
          <FaBars className="mx-2 my-1 cursor-pointer hidden sm:hidden md:block" onClick={()=>setSideBarToggle(!sideBarToggle)}/>
        <p className="font-bold text-center md:text-left">3.Social Media Dashboard</p>
        <div className="flex ml-16 ">
          <FaSearch className=" mt-1 ml-40 absolute sm:ml-40 lg:ml-44 " />
          
          <input type="text" className="p-2 border md:w-52 lg:w-48 h-6 align-middle" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:flex flex-wrap gap-2">
        {data.map((meraData) => (
          <div className=" p-1 border w-[40%] h-52 my-1 bg-white mx-auto ">
            {meraData.icon}
            <h3 className='text-center my-3 p-1 font-bold'>{meraData.value}</h3>
            <p className=" text-center p-1 font-normal ">{meraData.percentage}</p>
            <p className=" text-center my-3 font-medium p-1">{meraData.person}</p>
        
          </div>
        ))}
  
       
      </div>
     
    </header>
  );
}

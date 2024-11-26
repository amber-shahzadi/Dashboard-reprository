import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

export default function SideBar({sideBarToggle}) {
  
  return (
    <nav className={`md:${sideBarToggle? "hidden" : "block"} hidden sm:hidden md:w-full h-lvh lg:w-48 bg-gray-600 `}>
      <div className="py-3 lg:px-1 flex gap-2 text-xl text-white font-extrabold  md:justify-center  ">
        <MdOutlineDashboard className=" bg-black text-3xl rounded-full p-1 " />
        Dashboard 
      </div>
      <div className="text-left flex flex-col  md:text-center lg:text-left ">
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          1.Setting
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          2.Metrics
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          3.Social Media Dashboard
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          4.Social Media Reports
        </a>
        <a
          href=""
          className="no-underline py-1  text-white hover:bg-black "
        >
          Help and Support
        </a>
      </div>
    </nav>
  );
}

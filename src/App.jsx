import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './single page portfolio/navbar'

import About from './single page portfolio/about'
import Footer from './single page portfolio/footer'
import Education from './single page portfolio/educationS'


export default function App() {
  return (
    <>
    
    <NavBar />
   <About/>
   <Education/>
    <Footer/>
    </>
  )
}

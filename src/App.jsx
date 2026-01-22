import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'


import Login from './Login' // ✅ if Login.jsx is in src/
import AuthLayout from './AuthLayout'
import Signup from './Signup'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import Browse from './Browse'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJob/>
      
      <Footer/>
      
      
      
    </>
  )
}

export default App
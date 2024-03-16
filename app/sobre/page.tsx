import React from 'react'
import About from '../components/About'
import Team from '../components/Team'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default async function sobrePage() {
  return (
    <>
        <Navbar />
        <About />
        <Team /> 
        <Footer />
    </>
  )
}

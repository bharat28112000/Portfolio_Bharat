import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from "../components/AboutContent"

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Hi! I'm Bharat" text="Love to learn new things." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
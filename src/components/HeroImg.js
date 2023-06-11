import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import IntroImg from "../assets/back2.jpeg"

const HeroImg = () => {

    const openResume = () => {
        window.open('/Bharat_security_.pdf')
    }

  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>HI, I'M BHARAT</p>
            <h1>M.Tech CSE-Cyber Security</h1>
            <h2>IIT KANPUR</h2>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link to="/contact" className="btn btn-light">Resume</Link> */}
                <button className="btn btn-light" onClick={openResume}>Resume</button>
            </div>
        </div>
        
    </div>
    
  )
}

export default HeroImg
import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import mine from "../assets/mine.jpeg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            I'm final year Computer Science Post-Graduate student here at IIT Kanpur.
            I enjoy learning and developing various project in different tech stack.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="mine-img">
                    <img src={mine} alt="mine"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
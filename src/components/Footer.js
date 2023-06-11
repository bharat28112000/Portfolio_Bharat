import "./FooterStyles.css"
import React from "react"
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Hall-10 A-341</p>
                        <p>IIT Kanpur</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <p>+917503519440</p>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} /></h4>
                    <p>bharat22@iitk.cse.ac.in</p>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Hi, I'm Bharat, Final Year M.Tech Student. I enjoy learning new techs and love doing different projects.</p>
                <div className="social">
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
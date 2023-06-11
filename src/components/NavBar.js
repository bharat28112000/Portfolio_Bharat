import { Link } from "react-router-dom"
import "./NavBarStyles.css"
import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {

    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        setClick(prev => !prev)
    }

    const [color, setColor] = React.useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor)


    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: "white"}}/>
                ): (
                    <FaBars size={20} style={{color: "white"}}/>
                )}
                
                
            </div>
        </div>
  )
}

export default NavBar
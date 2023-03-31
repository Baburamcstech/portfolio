import "./HeroImgStyles.css";
import React from 'react'
import {Link} from "react-router-dom"
import IntroImg from "../assets/background.jpg"
const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
        <img className="backgroundImg" src={IntroImg} alt="Image"/>
        </div> 
        <div className="content">
        <p>Hi, I'm enthuastic about technologies</p>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg
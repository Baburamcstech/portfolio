import "./FooterStyles.css"
import React from 'react'
 import {FaFacebook, FaHome, FaLinkedin, FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-container">
      <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "#fff",marginRight:"2rem"}}/>
            <div>
            <p>123 Housing Society.</p>
            <p>India</p>
            </div>
        </div>
        <div className="phone">
          <h4><FaPhone size={20} style={{color:
          "#fff",marginRight:"2rem"}}/>1-2345-678-90</h4>
        </div>
        <div className="email">
          <h4><FaMailBulk size={20} style={{color:
          "#fff",marginRight:"2rem"}}/>1-2345-678-90</h4>
        </div>
      </div>
      <div className="right">
        <h4> About the company</h4>
        <p>This is me Baburam Yadav. NIT AP Student</p>
        <div className="social">
        <h4><FaFacebook size={30} style={{color:
          "#fff",marginRight:"2rem"}}/></h4>
            <h4><FaTwitter size={30} style={{color:
          "#fff",marginRight:"2rem"}}/></h4>
            <h4><FaLinkedin size={30} style={{color:
          "#fff",marginRight:"2rem"}}/></h4>
        </div>
      </div>
     </div></div>
  )
}

export default Footer
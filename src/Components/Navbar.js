import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Navbar.css"
import img1 from "../Assets/Home.png"
const Navbar = () => {
  return (
    <>
      <div className="nag">
            <li>Home</li>
            <li>About us</li>
            <li>Afministration</li>
            <li>Academics</li>
            <li>department</li>
            <li>Placement</li>
            <li>Campus life</li>
            <li>Research</li>
            <li>Online Fees</li>
            <li>COE</li>
            <li>Ariia</li>      
        </div>
        <div className="nag nag2">          
            <li>Upgrad Campus</li>
            <li>Iconnect</li>
            <li>BLog</li>
            <li>Careers</li>
            <li>Contact</li>
            {/* <img src={img1} alt="" /> */}
            </div>          
    </>
  )
}

export default Navbar

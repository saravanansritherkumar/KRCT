import React, { useEffect } from 'react'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Navbar1.css"
const Navbar1 = () => {
    
  return (
    <>
       <div className="navbar-main">
          <li>Home</li>
          <li>About us</li>
          <li>Afministration</li>
          <li>Academics</li>
          <li>Placement</li>
          <li>Campus life</li>
          <li>Research</li>
          <li>Online Fees</li>
          <li className='dropdown-toggle' data-toggle="dropdown" id='dropp'>Department</li>
          <div className='dropdown-menu'>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
            <li className='dropdown-item'>cse</li>
          </div>
          <li>COE</li>
          <li>Ariia</li>
          <li>Upgrad Campus</li>
          <li>Iconnect</li>
          <li>BLog</li>
          <li>Careers</li>
          <li>Contact</li>
       </div>
    </>
  )
}

export default Navbar1

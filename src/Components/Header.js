import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../Assets/images/Header/logo.jpg"
import img2 from "../Assets/images/Header/e-logon.jpg"
import img3 from "../Assets/images/Header/aicte.png"
import img4 from "../Assets/images/Header/ISO2020.png"
import img5 from "../Assets/images/Header/anna-university-logo-3D99770FF4-seeklogo.com.png"
import img6 from "../Assets/images/Header/nba_logo.png"
import img7 from "../Assets/images/Header/images.png"
import img8 from "../Assets/images/Header/download.jpg"
import "../Components/Header.css"
import $ from "jquery";
const Header = () => {
  useEffect(()=>{

    $(document).ready(function(){
      $(".fa-bars").click(function(){
        $(".side-menu").slideToggle("slow")
      })
    })

    $(document).ready(function(){
      $("#dept-dropdown").click(function(){
        $(".drop-down-1").slideToggle("slow")
      })
    })

  })

  return (
    <>
      <div className="header">
        <div className="header-main">
          <img src={img1} alt="" id='im1'/>
        </div>

        
          <div className="header-side">
             <img src={img2} alt=""  id='im2'/>
             <img src={img3} alt=""  id='im3'/>
             <img src={img4} alt=""  id='im4'/>
             <img src={img5} alt=""  id='im5'/>
             <img src={img6} alt=""  id='im6'/>
             <img src={img7} alt=""  id='im7'/>
             <img src={img8} alt=""  id='im8'/>
          </div> 


           <div className="side-header">
            <span><i class="fa-solid fa-bars"></i></span>
          </div>
      </div>


      <div className="side-menu">
        <center>
        <li>Home</li>
          <li>About us</li>
          <li>Administration</li>
          <li>Academics</li>
          <li id='dept-dropdown'>department <span><i class="fa-solid fa-caret-down"></i></span></li>
          <div className="drop-down-1">
          <li className='dropdown-item'>CSE</li>
            <li>AIDS</li>
            <li>AIML</li>
            <li>EEE</li>
            <li>ECE</li>
            <li>MECH</li>
            <li>IT</li>
            <li>CIVIL</li>
          </div>
          <li>Placement</li>
          <li>Campus life</li>
          <li>Research</li>
          <li>Online Fees</li>
          <li>COE</li>
          <li>Ariia</li>
          <li>Upgrad Campus</li>
          <li>Iconnect</li>
          <li>BLog</li>
          <li>Careers</li>
          <li>Contact</li>
        </center>
        </div>
    </>

  )
}

export default Header
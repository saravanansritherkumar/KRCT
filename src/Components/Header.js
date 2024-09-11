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
        <div className="header-main">
          <img src={img1} alt="" id='img1'/>
        </div>

        
          <div className="header-side">
             <img src={img2} alt=""  id='img2'/>
             <img src={img3} alt=""  id='img3'/>
             <img src={img4} alt=""  id='img4'/>
             <img src={img5} alt=""  id='img5'/>
             <img src={img6} alt=""  id='img6'/>
             <img src={img7} alt=""  id='img7'/>
             <img src={img8} alt=""  id='img8'/>
          </div> 


           <div className="side-header">
            <span><i class="fa-solid fa-bars"></i></span>
          </div>


      <div className="side-menu">
        <center>
        <li>Home</li>
          <li>About us</li>
          <li>Administration</li>
          <li>Academics</li>
          <li id='dept-dropdown'>department <span><i class="fa-solid fa-caret-down"></i></span></li>
          <div className="drop-down-1">
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
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

import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Navbar.css"
import img1 from "../Assets/Home.png"
import $ from "jquery";
const Navbar = () => {
  useEffect(()=>{
    $(document).ready(function(){
      $(".dropdown").click(function(){
        $(".dropdown-menu").slideDown("slow")
      })
    })
   $(document).ready(function(){
    $(".dropdown").click(function(){
      $(".dropdown-menu").slideUp("slow")
    })
   })

  })

  return (
    <>
      <div className="navigation-bar">
        <div className="navy">
          <li>Home</li>
          <li>About us</li>
          <li>Afministration</li>
          <li>Academics</li>
          {/* <li>department   <span><i class="fa-solid fa-caret-down"></i></span>

          <div className="slide-down-1">
            <center>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            <li>cse</li>
            </center>
          </div>
          </li>
          */}
         <li class="dropdown" id='dept-dropdown'>
           <span class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           department
           </span>
           <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
                     <li class="dropdown-item">cse</li>
           </div>
         </li>
          <li>Placement</li>
          <li>Campus life</li>
          <li>Research</li>
          <li>Online Fees</li>
          <li>COE</li>
          <li>Ariia</li>
        {/* </div>
        <div className="navy-2"> */}
          <li>Upgrad Campus</li>
          <li>Iconnect</li>
          <li>BLog</li>
          <li>Careers</li>
          <li>Contact</li>
        </div>
      </div>

      
          
    </>
  )
}

export default Navbar

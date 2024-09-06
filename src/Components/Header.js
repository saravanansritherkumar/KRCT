import React from 'react';
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

const Header = () => {
  return (
    <>
      <div className="header">
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
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-3 nav-main">
            <img src={img1} alt="" id='img1' />
          </div>
          <div className="col-9 nav-side">
            <img src={img2} alt="" id='img2' />
            <img src={img3} alt="" id='img3' />
            <img src={img4} alt="" id='img4' />
            <img src={img5} alt="" id='img5' />
            <img src={img6} alt="" id='img6' />
            <img src={img7} alt="" id='img7' />
            <img src={img8} alt="" id='img8' />
          </div>
        </div>
      </div> */}
    </>

  )
}

export default Header

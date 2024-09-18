import React from 'react'
import img1 from '../Assets/images/Recruiters/kaar.png'
import img2 from '../Assets/images/Recruiters/amazon_PNG24.png'
import img3 from '../Assets/images/Recruiters/aptean.png'
import img4 from '../Assets/images/Recruiters/Byus-logo.png'
import img5 from '../Assets/images/Recruiters/cognizant.png'
import img6 from '../Assets/images/Recruiters/core_gray60_on_white.svg'
import img7 from '../Assets/images/Recruiters/infosys.png'
import img8 from '../Assets/images/Recruiters/purple-slate.png'
import img9 from '../Assets/images/Recruiters/Tata_Consultancy_Services_Logo.svg.png'
import img10 from '../Assets/images/Recruiters/virtusa.png'
import img11 from '../Assets/images/Recruiters/Wipro 2.png'
import img12 from '../Assets/images/Recruiters/zoho.png'
import '../Components/OURRecruiters.css'



const OURRecruiters = () => {
  return (
    <div>

      <div className='overallrecruiter'>

        <h4 id='recruitersheading' >Our recruiters</h4>

        <div className='recruitershead'>
          <marquee scrollamount="20">
            <i class="fa-solid fa-business-time" id='bussinessicon'></i>
            <img src={img1} height={100} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img2} height={60} width={150} className='recruiters1'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img3} height={60} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img4} height={50} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img5} height={100} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img6} height={100} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img7} height={50} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img8} height={100} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img9} height={60} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img10} height={80} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img11} height={80} width={200} className='recruiters'></img>
            {/* <i class="fa-solid fa-business-time" id='bussinessicon'></i> */}

            <img src={img12} height={80} width={200} className='recruiters'></img>

            <i class="fa-solid fa-business-time" id='bussinessicon'></i>
          </marquee>

        </div>

      </div>

    </div>
  )
}

export default OURRecruiters
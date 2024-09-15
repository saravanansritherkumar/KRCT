import React from 'react'
import img1 from '../Assets/images/Recruiters/1606949232453.jpg'
import img2 from '../Assets/images/Recruiters/amazon_PNG24.png'
import img3 from '../Assets/images/Recruiters/aptean.png'
import img4 from '../Assets/images/Recruiters/Byus-logo.png'
import img5 from '../Assets/images/Recruiters/cognizant.png'
import img6 from '../Assets/images/Recruiters/core_gray60_on_white.svg'
import img7 from '../Assets/images/Recruiters/infosys.png'
import img8 from '../Assets/images/Recruiters/purpleslate.png'
import img9 from '../Assets/images/Recruiters/Tata_Consultancy_Services_Logo.svg.png'
import img10 from '../Assets/images/Recruiters/virtusa.png'
import img11 from '../Assets/images/Recruiters/wipro.png'
import img12 from '../Assets/images/Recruiters/zoho.png'
import '../Components/OURRecruiters.css'



const OURRecruiters = () => {
  return (
    <div>

<h4 id='recruitersheading'>OUR RECRUITERS</h4>
        <marquee behaviour='right'>

        <img  src={img1} height={100} width={200} className='recruiters'></img>
        <img  src={img2} height={60} width={150} className='recruiters'></img>
        <img src={img3} height={200} width={200} className='recruiters'></img>
        <img src={img4} height={100} width={200} className='recruiters'></img>
        <img src={img5} height={100} width={200} className='recruiters'></img>
        <img src={img6} height={100} width={200} className='recruiters'></img>
        <img src={img7} height={100} width={200} className='recruiters'></img>
        <img src={img8} height={100} width={200} className='recruiters'></img>
        <img src={img9} height={100} width={200} className='recruiters'></img>
        <img src={img10} height={100} width={200} className='recruiters'></img>
        <img src={img11} height={100} width={200} className='recruiters'></img>
        <img src={img12} height={100} width={100} className='recruiters'></img>


        </marquee>
        

    </div>
  )
}

export default OURRecruiters
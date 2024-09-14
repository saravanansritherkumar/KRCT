import React from 'react'
import img1 from '../Assets/images/civil lab .png'
import img2 from '../Assets/images/civil lab 2.png'
import img3 from '../Assets/images/civil lab 3.png'
import img4 from '../Assets/images/civil lab 4.png'
import img5 from '../Assets/images/civil lab 5.png'
import img6 from '../Assets/images/civil lab 6.png'
import '../Components/OURGALLERY.css'



const OURGALERY = () => {
  return (
    <>
      <center>

        <div className='mainscroll' >
          <h4 className='galleryheading'>OUR GALLERY</h4>
          <div className='col-lg-3' id='scroll' >
            <img src={img1} id='im' height={200} width={220}></img>
            <img src={img2} id='im' height={200} width={300} ></img>
            <img src={img3} id='im' height={200} width={300} ></img>
            <img src={img4} id='im' height={200} width={400} ></img>
            <img src={img5} id='im' height={200} width={400} ></img>
            <img src={img6} id='im' height={200} width={400} ></img>
          </div>
        </div>
      </center>

    </>
  )
}

export default OURGALERY

// Civil dept/civil lab.png'
// Civil dept/civil lab2.png
// Civil dept/civil lab3.png
// Civil dept/civil lab4.png
// Civil dept/civil lab5.png
// Civil dept/civil lab6.png
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
      <h4 className='galleryheading'>Our Gallery</h4>
      <div className='container-fluid' id='gallery'>


        <div className='container'>

          <div id='mainscroll'>

            <div className='scroll'>



              <img src={img1} id='im1' height={200} width={220}></img>
              <img src={img2} id='im' height={200} width={300} ></img>
              <img src={img3} id='im' height={200} width={300} ></img>
              <img src={img4} id='im' height={200} width={200} ></img>
              <img src={img5} id='im' height={200} width={400} ></img>
              <img src={img6} id='im' height={200} width={400} ></img>


            </div>

          </div>
        </div>
      </div>
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
import React from 'react'
import img1 from "../../Assets/images/Backgate.jpeg"
import "../Home/Home.css"
import img2 from "../../Assets/dummy/dummy1.jpg"
import img3 from "../../Assets/dummy/dummy2.jpg"

const Home = () => {
  return (
    <>
      <div className="carousel-section">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-6" id='about-us'>
              <h1>About Us</h1>
              <p id='about-para'>KRCT was started in 2010. it is approved by AICTE New Delhi, accredited by NAAC with A+ grade.K.Ramakrishnan college of technology, Tiruchirappalli,situated in the famous temple town Samayapuram, is a premiere organization striving to bring in constructive transformation in young asoirants by imparting technical, behavioural and valued based education</p>
            </div>
            <div className="col-6">
              <img src={img1} alt="" id='image1'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

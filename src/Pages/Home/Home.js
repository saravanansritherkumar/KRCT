import React from 'react'
import img1 from "../../Assets/images/Backgate.jpeg"
import "../Home/Home.css"
import img2 from "../../Assets/images/Group2.jpg"
import img3 from "../../Assets/images/groupp1.jpg"
import img4 from "../../Assets/Download-images/I-n.jpeg"
import img5 from "../..//Assets/Download-images/d-1.png"
import img6 from "../..//Assets/Download-images/d-2.png"
import img7 from "../..//Assets/Download-images/d-3.png"
import img8 from "../..//Assets/Download-images/d-4.png"
import img9 from "../..//Assets/Download-images/d-5.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  return (
    <>
      <div className="caroo">
        <div className="carousel-section">
          <div className="carousel slide" id='crs'>

            <ol className='carousel-indicators'>
              <li data-target='#crs' data-slide-to="0"></li>
              <li data-target='#crs' data-slide-to="1"></li>
              <li data-target='#crs' data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img4} alt="" />
              </div>
              <div className="carousel-item">
                <img src={img2} alt="" />
              </div>
              <div className="carousel-item">
                <img src={img3} alt="" />
              </div>
            </div>

            <a href="#crs" className='carousel-control-prev'><span data-target='#crs' data-slide='prev' className='carousel-control-prev-icon'></span></a>

            <a href="#crs" className='carousel-control-next'><span data-target='#crs' data-slide='next' className='carousel-control-next-icon'></span></a>
          </div>
        </div>
      </div>


      {/* ABOUT-US */}
      <div className="about-section m-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-2" id='about-us'>
              <h1>About Us</h1>
              <div className='border-botom'><span className='hh'></span><span className='hh1'></span></div>
              <div cla></div>
              <p id='about-para' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                KRCT was started in 2010. it is approved by AICTE New Delhi, accredited by NAAC with A+ grade.K.Ramakrishnan college of technology, Tiruchirappalli,situated in the famous temple town Samayapuram, is a premiere organization striving to bring in constructive transformation in young asoirants by imparting technical, behavioural and valued based education</p>
            </div>
            <div className="col-lg-6 p-3">
              <center>
                <img src={img1} alt="" id='imag1' />
              </center>
            </div>
          </div>
        </div>
      </div>

      {/* LATEST-NEWS */}
      <center>
        <div className="text">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <img src={img2} alt="" />
                      <div className="card-body">
                        <p >Our Chairman<br />
                          Dr.K.Ramakrishnan recieving Center of Excellence Award for KRCT from T. Mano Thangaraj Honourable Minister of Information Technology and Digital Services, Govt. of Tamilnadu.</p>
                        <button className='btn' >Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <img src={img4} alt="" />
                      <div className="card-body">
                        <p>Our Chairman<br />
                          Dr.K.Ramakrishnan recieving Center of Excellence Award for KRCT from T. Mano Thangaraj Honourable Minister of Information Technology and Digital Services, Govt. of Tamilnadu.</p>
                        <button className='btn'>Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 News-feed">
                <marquee behaviour="infinite" direction="up" id="myMarq">
                  {/* --------------------------------------------------------------------------------------------------------------- */}
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li onMouseEnter="stop">NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  {/* --------------------------------------------------------------------------------------------------------------- */}
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                  <div className="row my-3 p-3">
                    <div className="col-3 news-box">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9 news-content">
                      <li>NPTEL AWARNESS E-COMMERCE WORKSHOP 2022</li>
                      <li>Time: 10.00AM</li>
                      <li>link:https://www.terv.pro/login</li>
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </center>

      <div className="why-krct" >
        <div className="container">
          <h1>WHY KRCT</h1>
          <div className='border-botom'><span className='hh'></span><span className='hh1'></span></div>

          <div className="row">
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">EXPERIENCED FACULTY</h5>
                    <p class="card-text">Apporpriately Qualified And Experienced Faculty - Current,Contempory And Update - Mentoring,Counselling,Guiding </p>
                    <a href="#" class="btn">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Placement</h5>
                    <p class="card-text">The Department of placement envisages to train each learner a successful person.The Training and placement Cell Organizes a number... </p>
                    <a href="#" class="btn ">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Research</h5>
                    <p class="card-text">Department of Computer Science and engineering received center for research,awarded by Anna University.</p>
                    <a href="#" class="btn ">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img8} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Central Libray</h5>
                    <p class="card-text">In Keeping with the vision and mission of the college,the libary services play a vital role in supporting...</p>
                    <a href="#" class="btn ">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Academic Excellence</h5>
                    <p class="card-text">Consistent good result and ranks in Anna University Examinations... </p>
                    <a href="#" class="btn ">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="card">
                <img src={img5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Campus Life</h5>
                    <p class="card-text">With quality education KRCT has come forward extend a lot of facilities to the students..</p>
                    <a href="#" class="btn ">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

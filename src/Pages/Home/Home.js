import React from 'react'
import img1 from "../../Assets/images/Backgate.jpeg"
import "../Home/Home.css"
import img2 from "../../Assets/dummy/dummy1.jpg"
import img3 from "../../Assets/dummy/dummy2.jpg"

const Home = () => {
  return (
    <>
      <div className="carousel-section">
        <div className="carousel slide" id='crs'>

          <ol className='carousel-indicators'>
            <li data-target='#crs' data-slide-to="0"></li>
            <li data-target='#crs' data-slide-to="1"></li>
            <li data-target='#crs' data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} alt="" />
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

      {/* ABOUT-US */}
      <div className="about-section m-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6" id='about-us'>
              <h1>About Us</h1>
              <p id='about-para'>KRCT was started in 2010. it is approved by AICTE New Delhi, accredited by NAAC with A+ grade.K.Ramakrishnan college of technology, Tiruchirappalli,situated in the famous temple town Samayapuram, is a premiere organization striving to bring in constructive transformation in young asoirants by imparting technical, behavioural and valued based education</p>
            </div>
            <div className="col-lg-6 p-3">
              <center>
                <img src={img1} alt="" id='image1' />
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
              <div className="col-9">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <img src={img1} alt="" />
                      <div className="card-body">

                        <h1>Hello</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque! Dolore maiores ut blanditiis! At quae incidunt quia. Nesciunt reiciendis molestiae accusantium ipsa expedita libero recusandae, fugiat explicabo officiis.</p>
                        <button className='btn btn-danger'>Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <img src={img1} alt="" />
                      <div className="card-body">

                        <h1>Hello</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque! Dolore maiores ut blanditiis! At quae incidunt quia. Nesciunt reiciendis molestiae accusantium ipsa expedita libero recusandae, fugiat explicabo officiis.</p>
                        <button className='btn btn-danger'>Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <marquee behaviour="infinite" direction="up" id="myMarq">

                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p></p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p></p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>

                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p></p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-3 bg-primary">
                      <p>Nov 24</p>
                    </div>
                    <div className="col-9">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum itaque!</p>
                    </div>
                  </div>
                </marquee>

              </div>
            </div>
          </div>
        </div>
      </center>

      <div className="why-krct">
        <div className="container">
          <h1>WHY KRCT</h1>
          <div className="row">
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-4 myCard">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="card-content">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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

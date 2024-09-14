import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../Assets/images/person1.jpg'
import img3 from '../Assets/images/person2.jpeg'
import img4 from '../Assets/images/person3.jpeg'
import img5 from '../Assets/images/person4.jpeg'
import img6 from '../Assets/images/person5.jpeg'

import '../Components/Studentsopnion.css'

const Studentsopnion = () => {
  return (
    <>
      <div className='mainstudents'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div calssName="cardimagesize">
                <div className='cardcontainer'>
                  <div className='row'>
                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '>
                        <img src={img2} id='image1'></img>

                        <div className='card-body'>

                          <div className='card-title'>
                            <p >Our college is the Best place to
                              equip and widen out knowledge provides numerous platform to
                              showcase our talents and mold us in the right path
                            </p>
                            <h6 id='name1'>THARANI</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '   >
                        <img src={img3} id='image2'></img>
                        <div className='card-body'>

                          <div className='card-title'>
                            <div className='card2'>
                              <p>Best Bridge to explore the great levels of live-proud to be a KRCTian
                              </p>

                              <h6 id='name2'>SHABHARISH SASINDHRAN</h6>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 p-5 col-md-1'>
                      <div className='card ' >
                        <img src={img4} id='image3' height={120} />


                        <div className='card-body'>
                          <div className='card3'>
                            <div className='card-title'>

                              <p>  it was pleasure to be an KRCT's product </p>

                              <h6 id='name3'>HARIHARAN</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>






            </div>
            <div class="carousel-item">




              <div calssName="cardimagesize">

                <div className='cardcontainer'>
                  <div className='row'>
                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '>
                        <img src={img2} id='image1' />


                        <div className='card-body'>

                          <div className='card-title'>

                            <p>Our college is the Best place to
                              equip and widen out knowledge provides numerous platform to
                              showcase our talents and mold us in the right path
                            </p>
                            <h6 id='name1'>THARANI</h6>


                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '   >
                        <img src={img3} id='image2' />
                        <div className='card-body'>

                          <div className='card-title'>
                            <div className='card2'>

                              <p>Best Bridge to explore the great levels of live-proud to be a KRCTian
                              </p>

                              <h6 id='name2'>SHABHARISH SASINDHRAN</h6>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 p-5 col-md-1'>
                      <div className='card ' >
                        <img src={img4} id='image3' height={120} />

                        <div className='card-body'>
                          <div className='card3'>
                            <div className='card-title'>

                              <p>  it was pleasure to be an KRCT's product </p>

                              <h6 id='name3'>HARIHARAN</h6>

                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>










            </div>
            <div class="carousel-item">






              <div calssName="cardimagesize">

                <div className='cardcontainer'>
                  <div className='row'>
                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '>
                        <img src={img2} id='image1' />

                        <p id='para1'>  Our college is the Best place to
                          equip and widen out knowledge provides numerous platform to
                          showcase our talents and mold us in the right path
                        </p>
                        <h6 id='name1'>THARANI</h6>


                        <div className='card-body'>

                          <div className='card-title'>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 p-5 col-md-1' >
                      <div className='card '   >
                        <img src={img3} id='image2' />
                        <div className='card-body'>

                          <div className='card-title'>
                            <div className='card2'>

                              <p>Best Bridge to explore the great levels of live-proud to be a KRCTian
                              </p>

                              <h6 id='name2'>SHABHARISH SASINDHRAN</h6>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 p-5 col-md-1'>
                      <div className='card ' >
                        <img src={img4} id='image3' height={120} />

                        <div className='card3'>
                          <div className='card-body'>

                            <div className='card-title'>
                              <p>  it was pleasure to be an KRCT's product </p>

                              <h6 id='name3'>HARIHARAN</h6>

                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>











            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

    </>
  )
}

export default Studentsopnion





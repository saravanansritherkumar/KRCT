import React from 'react'
import '../Components/Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
  return (
    <div className='container-fluid footermain'>

      <div className='footermain1'>
<div className='container'>
        <div className='row'>
          <div className='col-lg-9'>



            <div className='row'>
              <div className='col-lg-3 mt-1 col-md-6'>
                <h4 className='footerheading1'>Quick Links</h4>
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
             <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i> Teaching Learning</p> 
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>ERP Crystal HR</p>
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Faculty Development <br></br><span className='ml-3'>Activity Form</span></p>
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>OPAC @ KRCT</p>
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>CAMU Staff Login</p>
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>DELNET</p>
                 <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Smart Hostel</p>
                </div>
              </div>

              <div className='col-lg-3 mt-5 col-md-6' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Web Mail</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Mandatory Disclosure</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Confrence</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Brochure Upload Form</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>NIRF</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>NAAC</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>AICTE</p>

              </div>


              <div className='col-lg-3 mt-5 col-md-6'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">


                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>IQAC CELL</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>CAMU Student Login</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>KRCT MEdia</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Audited Statement</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>HR Policy</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>Faculty Perfomance <br></br><span className='ml-3'></span>Appraisal</p>
                <p className='footercontent'><i className='fa fa-chevron-right mr-2'></i>IEEE</p>




              </div>


              <div className='col-lg-3 mt-3 col-md-6' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h4 className='footerheading2'>Contact Info</h4>

                <div className='footerconect1 '>

                  <i class="fa-solid fa-location-pin" id='footericons'></i>

                  <p className='footercontent'> Kariyamangalam Road, <br></br> Samayapuram <br></br> Trichy-621112</p>
                </div>

                <div className='footerconect2'>
                  <i class="fa-solid fa-phone" id='footericons'></i>

                  <p className='footercontent'>phone: 0431 - 2670799</p>
                </div>

                <div className='footerconect3'>
                  <i class="fa-solid fa-message" id='footericons'></i>
                  <p className='footercontent'>Email: krct.trichy@gmail.com</p>



                </div>


                <div>
                  <i id='footermedia' class="fa-brands fa-x-twitter"></i>
                  <i id='footermedia' class="fa-brands fa-facebook"></i>
                  <i id='footermedia' class="fa-brands fa-linkedin"></i>

                </div>





              </div>




            </div>







          </div>

          <div className='col-lg-3 col-md-12 px-3' >

            <div className='footermap'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4532252501726!2d78.73558637487206!3d10.929096189229087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf7316aaaaaab%3A0xb794422e551a89ad!2sK%20Ramakrishnan%20College%20of%20Engineering%20(KRCE)!5e0!3m2!1sen!2sin!4v1725594122520!5m2!1sen!2sin" width={200} height={200} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='footermap1'></iframe>
            </div>
          </div>


        </div>

      </div>

      <div className='footercopyright col-md-12 text-center'>
        {/* <p>@ copyrights 2022 KRCT | All Rights Reserved.Designed By CSE Batch (2022-2024)</p> */}
        <p>@ copyrights 2022 KRCT | All Rights Reserved  |  Designed By PERSISTENCE TECHNOLOGY</p>

      </div>


    </div>
    </div>
  )
}

export default Footer
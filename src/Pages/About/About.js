import React from 'react'
import Half1 from '../../Half1'
import '../About/About.css'
import aboutimg1 from "..//../Assets/images/KRCT-MAIN-BLOCK1-1.jpg"
import awardimg from "..//../Assets/images/award.jpeg"
import awardimg1 from "..//../Assets/images/award2.jpeg"
import chairmanimg from "..//../Assets/images/chairman.png"


const About = () => {
    return (
        <div>

            <nav aria-label="breadcrumb" id='aboutbreadcrum'>
                <ol class="breadcrumb">
                    <h4 id='abouthead'>About us</h4>
                    <div id='breadcrumvalues1'></div>
                    <li class="breadcrumb-item" ><a href="#" id='breadcrumvalue' >Home</a></li>
                    <li class="breadcrumb-item" ><a href="#" id='breadcrumvalue' >About us</a></li>
                </ol>
            </nav>
            <div className='container'>
                <div id='Aboutcard'>
                    <div className='row '>
                        <div className='col-lg-6 col-md-12  '>
                            <div className='card'>
                                <img src={aboutimg1} id='aboutimg1' className='pb-2' />

                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                            <p id='aboutpara'> K.Ramakrishana college of technology,Trichirappalli,situated in th famous temple town
                                samayapuram , is  premiere organization striving to bring in constructive transformation
                                in young aspirants by impating technical,behavioural and value based neducation where we
                                rich coporate culture to meet the hurdles challenges of coporate sector and also life by enhaning
                                their personality,communication and briging in entrepreneurial skills.we
                                belive in educating ,enhancing and empowering the student community to face the challenges of tommorrow
                                and to be the front-runners in job market.we the skill sets required to summort the challenges of competivtivt world    </p>              </div>
                    </div>
                </div>

                <div className='abouthead2'>
                    <h4 id='abouthead2' >Awards & Recognitions</h4>

                    <div id='head2border'></div>
                    <div className='row'>
                        <div className='col-lg-1 pl-2 pt-5 pl-5 col-md-12 d-flex justify-content-center'>
                            <img src={awardimg} id='awardimg' />
                        </div>
                        <div className='col-lg-3 pt-5 pl-5 col-md-12 d-flex justify-content-center'>
                            Best Technical Institute Award Received From Apeta
                        </div>
                        <div className='row'>
                            <div className='col-lg-1 pl-5 pt-5 pl-5 col-md-12 d-flex justify-content-center'>
                                <img src={awardimg1} id='awardimg' />
                            </div>
                            <div className='col-lg-3 pt-5 pl-5 col-md-12 d-flex justify-content-center'>
                                35 Mous Signed with Reputed Organization
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-lg-1 pl-5 pt-5 pl-5 col-md-12 d-flex justify-content-center'>
                                <img src={awardimg1} id='awardimg' />
                            </div>
                            <div className='col-lg-3 pt-5 pl-5'>
                                Award As "Best Promising College For engineering in india By Education post Magazine"
                            </div>
                        </div>


                        <h4 id='abouthead2' >Management Team </h4>
                        <div id='head2border'></div>



                        <div className='row'>
                            <div className='col-lg-3 col-md-12 d-flex justify-content-center'>
                                <div className='card'>
                                    <img src={chairmanimg} height={200} />

                                    <h4 id='charname'>Dr.k.Ramakrishnan</h4>
                                    <p id='charrole'>chairman</p>

                                </div>
                            </div>

                            <div className='col-lg-3 col-md-12 d-flex justify-content-center'>
                                <div className='card'>
                                    <img src={chairmanimg} height={200} />

                                    <h4 id='charname'>Dr.k.Ramakrishnan</h4>
                                    <p id='charrole'>chairman</p>

                                </div>
                            </div>

                            <div className='col-lg-3 col-md-12 d-flex justify-content-center'>
                                <div className='card'>
                                    <img src={chairmanimg} height={200} />

                                    <h4 id='charname'>Dr.k.Ramakrishnan</h4>
                                    <p id='charrole'>chairman</p>

                                </div>
                            </div>

                            <div className='col-lg-3 col-md-12 d-flex justify-content-center'>
                                <div className='card'>
                                    <img src={chairmanimg} height={200} />

                                    <h4 id='charname'>Dr.k.Ramakrishnan</h4>
                                    <p id='charrole'>chairman</p>
                                </div>
                            </div>







                        </div>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default About
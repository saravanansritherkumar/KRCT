import React from 'react'
import "../CSE/Cse.css"
import img1 from "../..//Assets/Download-images/d-1.png"
import img2 from "../..//Assets/Download-images/d-2.png"
const Cse = () => {
    return (
        <>
            <div className="cse">
                <nav className="breadcrumbs" >
                    <h4>Department of computer science</h4>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
                <div className="dept-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <ol>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                    <li>cse</li>
                                </ol>
                            </div>
                            <div className="col-10">
                                <div className="cse-about">
                                    <h3>ABout</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus ipsam exercitationem dicta inventore ipsa error odit sapiente eaque numquam doloremque recusandae ut fugiat animi, libero laudantium possimus optio veritatis, alias mollitia? Aspernatur eveniet hic exercitationem suscipit dicta sapiente optio facere quod eius veniam, natus blanditiis </p>
                                </div>
                                <div className="cse-latest-news">
                                    <center>
                                        <div className="text">
                                            <div className="container">
                                                <h4 id='text-head'>LATEST NEWS & UPDATES</h4>
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="card">
                                                                    <img src={img1} alt="" />
                                                                    <div className="card-body">
                                                                        <p >Our Chairman<br />
                                                                            Dr.K.Ramakrishnan recieving Center of Excellence Award for KRCT from T. Mano Thangaraj Honourable Minister of Information Technology and Digital Services, Govt. of Tamilnadu.</p>
                                                                        <button className='btn' >Button</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="card">
                                                                    <img src={img2} alt="" />
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
                                                        <marquee direction="up" id="myMarq">
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

                                    <div className="courses-offered">
                                        <h5>courses offered</h5>
                                        <ul>
                                            <li>B.E - Computer Science and Engineering - 4 years</li>
                                            <li>M.E - Computer Science and Engineering - 2 years</li>
                                            <li>ph.d information and communication engineering (Cse)-part time/full time</li>
                                        </ul>
                                    </div>
                                    <div className="vision">
                                        <h5>VISION</h5>
                                        <p>
                                            To be a center of eminence in imparing global knowledge and budding compentent software professionals with research and innovative skills aimed towards betterment of society.
                                        </p>
                                        
                                    </div>
                                    <div className="mission">
                                        <h5>courses offered</h5>
                                        <ul>
                                            <li>To impart quality education to learn and practice various hardware and software platform prevalent in industry.</li>
                                            <li>To provide learning ambiance to generate innovative skills and expose the students to aboard research experinece.</li>
                                            <li>To grooms our young students to becomes professionally and morally sounds enginnering to the society.</li>
                                        </ul>
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

export default Cse

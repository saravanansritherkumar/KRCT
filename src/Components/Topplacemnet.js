import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components/Topplacement.css'
import img1 from "../Assets/images/person4.jpeg"
const Topplacemnet = () => {
    return (
        <>
            <div className="topplacement">
            <h1 id='tp-head'>TOP PLACEMENT</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2" id='card-1'>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img1} alt="" className='img-fluid'/>
                                    <div className="card-content">
                                        <h5>suraj</h5>
                                        <p>wipro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------- */}
                        <div className="col-lg-2" id='card-2'>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img1} alt="" className='img-fluid'/>
                                    <div className="card-content">
                                        <h5>suraj</h5>
                                        <p>wipro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------- */}
                        <div className="col-lg-2" id='card-3'>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img1} alt="" className='img-fluid'/>
                                    <div className="card-content">
                                        <h5>suraj</h5>
                                        <p>wipro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------- */}
                        <div className="col-lg-2" id='card-4'>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img1} alt="" className='img-fluid' />
                                    <div className="card-content">
                                        <h5>suraj</h5>
                                        <p>wipro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------- */}
                        <div className="col-lg-2" id='card-5'>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img1} alt="" className='img-fluid'/>
                                    <div className="card-content">
                                        <h5>suraj</h5>
                                        <p>wipro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topplacemnet

import React from 'react'
import img1 from "../../Assets/images/Backgate.jpeg"
import "../Home/Home.css"
const Home = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>About Us</h1>
          <p id='about-para'>KRCT was started in 2010. it is approved by AICTE New Delhi, accredited by NAAC with A+ grade.K.Ramakrishnan college of technology, Tiruchirappalli,situated in the famous temple town Samayapuram, isa premiere organization striving to bring in constructive transformation in young asoirants by imparting technical, behavioural and valued based education</p>
        </div>
        <div className="col-6">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* <div className='cardy'>
      <div className="card">
         <img src="..." className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
      </div>
      </div> */}
    </div>
    </>
  )
}

export default Home

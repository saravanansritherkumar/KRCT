import React from 'react'
import img1 from '../Assets/images/person1.jpg'
import img2 from '../Assets/images/person2.jpeg'
import img4 from '../Assets/images/person3.jpeg'

import '../Components/Studentsopnion.css'

const Studentsopnion = () => {
  return (
     <>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">

    <div className='studentsopnion'>
<div className='row'>

 <div className='col-lg-3'>
   <div className='card'>
   <img src={img1} id='img1' />
     <div className='card-body'>
       <p id='para1'> Our college is the Best place to equip and widen knowledge provides numerous platform to showcase our talents and mold us in th right path</p>
       <div className='card-title'>
         <h4 id='headingopnion1'>THARANI</h4>
 </div>
 </div>
 </div>
 </div>


 



<div className='col-lg-3'>
<div className='card'>
 <img src={img2} id='img2'/>
 <div className='card-body'>
   <p id='para2'>Best Bridge to explore the great levels of live - proud to be a KRCTian</p>
   <div className='card-title'>
     <h4 id='headingopnion2'>SHABARISH SASINDAHARAN</h4>
 </div>
 </div>
 </div>
 </div>


 <div className='col-lg-3'>
<div className='card'>
<img src={img4} className='img3'/>
<div className='card-body'>
<p id='para3'> it was pleasure to be an KRCT's product</p>
   <div className='card-title'>
     <h4 id='headingopnion1'>HARIHARAN</h4>
 </div>
 </div>
 </div>
 </div>

 </div>


 </div>

    </div>
    <div class="carousel-item">

    <div className='studentsopnion'>
<div className='row'>

 <div className='col-lg-3'>
   <div className='card'>
   <img src={img1} id='img1' />
     <div className='card-body'>
       <p id='para1'> Our college is the Best place to equip and widen knowledge provides numerous platform to showcase our talents and mold us in th right path</p>
       <div className='card-title'>
         <h4 id='headingopnion1'>THARANI</h4>
 </div>
 </div>
 </div>
 </div>


 



<div className='col-lg-3'>
<div className='card'>
 <img src={img2} id='img2'/>
 <div className='card-body'>
   <p id='para2'>Best Bridge to explore the great levels of live - proud to be a KRCTian</p>
   <div className='card-title'>
     <h4 id='headingopnion2'>SHABARISH SASINDAHARAN</h4>
 </div>
 </div>
 </div>
 </div>


 <div className='col-lg-3'>
<div className='card'>
<img src={img4} className='img3'/>
<div className='card-body'>
<p id='para3'> it was pleasure to be an KRCT's product</p>
   <div className='card-title'>
     <h4 id='headingopnion1'>HARIHARAN</h4>
 </div>
 </div>
 </div>
 </div>

 </div>


 </div>

    </div>
    <div class="carousel-item">

    <div className='studentsopnion'>
<div className='row'>

 <div className='col-lg-3'>
   <div className='card'>
   <img src={img1} id='img1' />
     <div className='card-body'>
       <p id='para1'> Our college is the Best place to equip and widen knowledge provides numerous platform to showcase our talents and mold us in th right path</p>
       <div className='card-title'>
         <h4 id='headingopnion1'>THARANI</h4>
 </div>
 </div>
 </div>
 </div>


 



<div className='col-lg-3'>
<div className='card'>
 <img src={img2} id='img2'/>
 <div className='card-body'>
   <p id='para2'>Best Bridge to explore the great levels of live - proud to be a KRCTian</p>
   <div className='card-title'>
     <h4 id='headingopnion2'>SHABARISH SASINDAHARAN</h4>
 </div>
 </div>
 </div>
 </div>


 <div className='col-lg-3'>
<div className='card'>
<img src={img4} className='img3'/>
<div className='card-body'>
<p id='para3'> it was pleasure to be an KRCT's product</p>
   <div className='card-title'>
     <h4 id='headingopnion1'>HARIHARAN</h4>
 </div>
 </div>
 </div>
 </div>

 </div>


 </div>

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
    </>


  )
}

export default Studentsopnion



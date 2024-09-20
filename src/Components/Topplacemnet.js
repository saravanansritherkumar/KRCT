import React from 'react'
import img1 from '../Assets/images/Recruiters/Wipro 2.png'
import '../Components/Topplacement.css'
import img2 from '../Assets/images/person1.jpg'
import img3 from '../Assets/images/person2.jpeg'
import img4 from '../Assets/images/person3.jpeg'
import img5 from '../Assets/images/person4.jpeg'
import img6 from '../Assets/images/person5.jpeg'
import img7 from '../Assets/images/bussinesscard.png'

const Topplacemnet = () => {
    return (
        <>

<div className='topplacement'>

<h4 id='topmain'> Topplacement</h4>



    <div className='container'>

        <div className='row'>


<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card ' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>PRAVEEN KUMAR</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2' />

        <img src={img1}   id='topimg1'/>

    </div>
</div>



<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>PRAVEEN KUMAR</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2'  />

        <img src={img1}  id='topimg1' />

    </div>
</div>





<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>PRAJULA R</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2'  />

        <img src={img1}  id='topimg1' />

    </div>
</div>




<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>MONIKA DAHARANI G</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2'  />

        <img src={img1}  id='topimg1' />

    </div>
</div>




<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>NIRANJANA SR</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2'  />

        <img src={img1}  id='topimg1'  />

    </div>
</div>



<div className='col-lg-2 col-md-6 d-flex justify-content-center'>
    <div className='card' id='card1'>
    <div id='border'>
        <h4 id='topheading1'>UMA GOWRI</h4>
        <p id='tophead'>CSE-2018</p>
            </div>

        <img src={img2} id='topimg2' />

        <img src={img1}  id='topimg1' />

    </div>
</div>


            
        </div>
    </div>

        </div>
        </>
    )
}

export default Topplacemnet
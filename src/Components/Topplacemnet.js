import React from 'react'
import img1 from '../Assets/images/Recruiters/wipro.png'
import '../Components/Topplacement.css'
import img2 from '../Assets/images/person1.jpg'
import img3 from '../Assets/images/person2.jpeg'
import img4 from '../Assets/images/person3.jpeg'
import img5 from '../Assets/images/person4.jpeg'
import img6 from '../Assets/images/person5.jpeg'


const Topplacemnet = () => {
  return (
    <div className='container-fluid'> 

        <div className='row'> 
        <div className='card col-lg-2' id='card1'>

<img src={img2} height={200} width={200}></img>

            <div className='card-body'>
                <div className='card-title'>
                    <img src={img1} className='wipro' ></img>
                </div>
            </div>
        </div>

        <div className='card col-lg-2' id='card1'>

        <img src={img3} height={200} width={200}></img>


<div className='card-body '>
    <div className='card-title'>
        <img src={img1} className='wipro' ></img>
    </div>
</div>
</div>


<div className='card col-lg-2' id='card1'>

<img src={img4} height={200} width={200}></img>


<div className='card-body'>
    <div className='card-title'>
        <img src={img1} className='wipro' ></img>
    </div>
</div>
</div>

<div className='card col-lg-2' id='card1'>

<img src={img6} height={200} width={200}></img>




<div className='card-body'>
    <div className='card-title'>
        <img src={img1} className='wipro' ></img>
    </div>
</div>
</div>


<div className='card col-lg-2' id='card1'>

<img src={img5} height={200} width={200}></img>


<div className='card-body'>
    <div className='card-title'>
        <img src={img1}  className='wipro'></img>
    </div>
</div>
</div>


        </div>
    </div>
  )
}

export default Topplacemnet
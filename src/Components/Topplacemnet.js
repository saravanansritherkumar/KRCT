import React from 'react'
import img1 from '../Assets/images/Recruiters/Wipro 2.png'
import '../Components/Topplacement.css'
import img2 from '../Assets/images/person1.jpg'
import img3 from '../Assets/images/person2.jpeg'
import img4 from '../Assets/images/person3.jpeg'
import img5 from '../Assets/images/person4.jpeg'
import img6 from '../Assets/images/person5.jpeg'


const Topplacemnet = () => {
    return (
        <>
=
<div className='topplacement'>

<h2 id='headingtopplacement'>Top placement</h2>


        <div className='container-fluid'>

<div className='row'>
            <div className='col-lg-2 col-md-2'>
                <div id='card1'>

                    <img src={img2} height={200} width={150} />

                    <h4 id='name'>PRAVEEN KUMAR</h4>

                    <p id='department'>CSE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>

            <div className='col-lg-2'>
                <div id='card1'>

                    <img src={img3} height={200} width={150} />

                    <h4 id='name'>PRAJULA R</h4>

                    <p id='department'>ECE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>


            <div className='col-lg-2'>
                <div id='card1'>

                    <img src={img4} height={200} width={150} />

                    <h4 id='name1'>MONIKA DHARANI G</h4>

                    <p id='department'>ECE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>




            <div className='col-lg-2'>
                <div id='card1'>

                    <img src={img3} height={200} width={150} />

                    <h4 id='name'>NIRANJANA SR</h4>

                    <p id='department'>CSE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>




            <div className='col-lg-2'>
                <div id='card1'>

                    <img src={img3} height={200} width={150} />

                    <h4 id='name'>UMA GOWRI</h4>

                    <p id='department'>ECE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>


            <div className='col-lg-2 col-md-2'>
                <div id='card1'>

                    <img src={img2} height={200} width={150} />

                    <h4 id='name'>PRAVEEN KUMAR</h4>

                    <p id='department'>CSE-2018</p>

                    <img src={img1} height={100} width={100} id='wipro'/>

                </div>
            </div>






            </div>
        </div>
        </div>
        </>
    )
}

export default Topplacemnet
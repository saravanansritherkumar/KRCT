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

<div className='topplacement'>

<h4 id='topmain'> Topplacement</h4>



    <div className='container'>

        <div className='row'>



            <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3' id='image2'>
                <div className='card' >
                    <img src={img2} width={130} />
                    <div className='card-body'>
                        <div className='card-title'>

                            <h4 id='topname' className='pt-3'>PRAVEEN KUMAR</h4>

                            <p id='topdepartment'>CSE-2018</p>


                            <img src={img1} id='image1' width={100}/>


                </div>
                </div>
                </div>
                </div>



                <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3' >
                <div className='card'>
                    <img src={img3} height={110} />
                    <div className='card-body'>
                        <div className='card-title'>


<h4 id='topname' className='pt-2'>PRAJULA R</h4>

<p id='topdepartment'>ECE-2018</p>

                        <img src={img1} id='image1' width={100}/>


                </div>
                </div>
                </div>
                </div>




                <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3'>
                <div className='card'>
                    <img src={img6} height={110}  />
                    <div className='card-body'>
                        <div className='card-title'>

                            <h4 id='topname' className='pt-2'>MONIKA DHARANI G</h4>
                            <p id='topdepartment'>ECE-2018</p>


                        <img src={img1} id='image2' width={100} className='pl-2'/>


                </div>
                </div>
                </div>
                </div>


                <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3'>
                <div className='card'>
                    <img src={img5}  height={100}/>
                    <div className='card-body'>
                        <div className='card-title'>

<h4 id='topname' className='pt-3'>NIRANJANA SR</h4>
<p id='topdepartment'>CSE-2018</p>

                        <img src={img1} id='image1' width={100}/>


                </div>
                </div>
                </div>
                </div>




                <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3' id='image2'>
                <div className='card'>
                    <img src={img2} width={130} />
                    <div className='card-body'>
                        <div className='card-title'>
<h4 id='topname' className='pt-3'>UMA GOWRI</h4>
<p id='topdepartment'>ECE-2018</p>

                        <img src={img1} id='image1' width={100}/>


                </div>
                </div>
                </div>
                </div>

                <div className='col-lg-2 col-md-12 d-flex justify-content-center pb-3' id='image2'>
                <div className='card'>
                    <img src={img3} height={110} />
                    <div className='card-body'>
                        <div className='card-title'>

<h4 id='topname' className='pt-2'>NIRANJANA SR</h4>
<p id='topdepartment'>CSE-2018</p>
                        <img src={img1} id='image1' width={100}/>


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

export default Topplacemnet
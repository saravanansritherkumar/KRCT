import React from 'react'
import Footer from "./Components/Footer"
import OURGALERY from './Components/OURGALERY'
import OURRecruiters from "./Components/OURRecruiters";
import Studentsopnion from "./Components/Studentsopnion";
import Topplacement from './Components/Topplacemnet'

const Half = () => {
  return (
    <div>
      <OURRecruiters/>
      <Studentsopnion />
      <Topplacement/>
      <OURGALERY/>
      <Footer/>
    </div>
  )
}

export default Half

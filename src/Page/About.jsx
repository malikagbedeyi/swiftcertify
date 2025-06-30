import React, { useState } from 'react'
import '../assets/Sass/About/style.scss'
import Navbar from '../Component/AboutComponent/Navbar'
import Aboutmain from '../Component/AboutComponent/Aboutmain'
import Footer from '../Component/Footer'
import AboutService from '../Component/AboutComponent/AboutService'
import AboutVideo from '../Component/AboutComponent/AboutVideo'

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

const toggleVideo = () => setShowVideo(!showVideo);
  return (
    <div className='about'>
      <Navbar />
      <Aboutmain toggleVideo={toggleVideo}/>
      <AboutService />
      <Footer />
      <AboutVideo  showVideo={showVideo} setShowVideo={setShowVideo}/>
    </div>
  )
}

export default About

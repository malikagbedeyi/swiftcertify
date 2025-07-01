import React, { useEffect, useState } from 'react'
import '../../assets/Sass/Home/navbar.scss'
import img1 from '../../assets/Images/img1.png'
import logo from '../../assets/Images/mix-logo.PNG'
import WhiteLogo from '../../assets/Images/white-logo.PNG'
const Navbar = () => {

  const [isScroll , setIsScroll] = useState(false)
  const [submenu,setSubmenu] = useState(false)

  const handleSubmenu = () => {
    setSubmenu(!submenu)
  }
  useEffect(() => {

    const handleScroll = () => {
     setIsScroll( window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (

    <div className="navbar">
    <header className={`navbar ${isScroll ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="container">
            <section className="wrapper">
                <div className="left-wrapper">
                    <div className="left-wrapper-logo">
                      <figure className={isScroll ? '':'d-none'}>
                      <img src={logo} alt="" />
                      </figure>
                      <figure className={isScroll ? 'd-none':''}>
                      <img src={WhiteLogo} alt="" />
                      </figure>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="wrapper-menu">
                        <ul>
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/about">about us</a></li>
                            <li className="handleSubmenu"><a href="">Services</a>
                            <ul className="submenu">
                              <li><a href="">Cloud Advisory Services</a></li>
                              <li><a href="">Technical Business Consulting</a></li>
                              <li><a href="">Managed Support Services</a></li>
                              <li><a href="">Cybersecurity Operations and Support</a></li>
                            </ul>
                            </li>
                            <li><a href="#/blog">Blog</a></li>
                            <li><a href="#/career">Careers</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>    
                    </div>
                </div>
            </section>
        </div>
      </div>
    </header>
    <main>
     <section className='main-content'>
      <div className="container">
            <div className="main-content-wrapper">
              <div className="main-container row" >
            <div className="left-main-content col-lg-6">
              <div className="main-title">
                <h4>SECURING INFORMATION ASSETS</h4>
                <h2>Improving Security and Compliance posture in tailored-approach</h2>
                <div className="main-text">
                  <p>At SwiftCertify, we deliver expert consulting services that drive sustainable transformation, ensure regulatory compliance, and elevate operational performance—swiftly and strategically.</p>
                </div>
                  <div className="button-box">
                <a>Contact Us</a>
                  <a className='opposite-btn'>Learn More</a>
              </div>
              </div>
        
            </div>
            <div className="right-main-content col-lg-6">
              <div className="main-object">
                <img src={img1} alt="" />
              </div>
            </div>
            </div>
            </div>
            </div>
            <div className="overlay"></div>
             </section>
             </main>
             </div>
  )
}

export default Navbar

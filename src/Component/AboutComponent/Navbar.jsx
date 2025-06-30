import React, { useEffect, useState } from 'react'
import '../../assets/Sass/About/navbar.scss'
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/#about">about us</a></li>
                            <li className="handleSubmenu"><a href="">Services</a>
                            <ul className="submenu">
                              <li><a href="">Cloud Advisory Services</a></li>
                              <li><a href="">Technical Business Consulting</a></li>
                              <li><a href="">Managed Support Services</a></li>
                              <li><a href="">Cybersecurity Operations and Support</a></li>
                            </ul>
                            </li>
                            <li><a href="/#career">Careers</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>    
                    </div>
                </div>
            </section>
        </div>
      </div>
    </header>
    <main>
        <section className="inner-banner-wrap">
     <div className='inner-baner-container'>
         <div class="container">
                     <div class="inner-banner-content">
                        <h1 class="inner-title">About Us</h1>
                     </div>
                  </div>
            <div className="overlay-image"></div>
            <div class="bottom-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                     </svg>
                  </div>
                  </div>
             </section>
             </main>
             </div>
  )
}

export default Navbar

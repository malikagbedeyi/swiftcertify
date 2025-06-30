import React, { useEffect, useState } from 'react'
import '../assets/Sass/header.scss'
import img1 from '../assets/Images/img1.png'
import logo from '../assets/Images/mix-logo.PNG'
import WhiteLogo from '../assets/Images/white-logo.PNG'


const Header = () => {
    
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
    <div>
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
                               <li><a href="">Home</a></li>
                               <li><a href="">about us</a></li>
                               <li className="handleSubmenu"><a href="">Services</a>
                               <ul className="submenu">
                                 <li><a href="">Cloud Advisory Services</a></li>
                                 <li><a href="">Technical Business Consulting</a></li>
                                 <li><a href="">Managed Support Services</a></li>
                                 <li><a href="">Cybersecurity Operations and Support</a></li>
                               </ul>
                               </li>
                               <li><a href="">Careers</a></li>
                               <li><a href="">Contact</a></li>
                           </ul>    
                       </div>
                   </div>
               </section>
           </div>
         </div>
       </header>
       </div>
  )
}

export default Header

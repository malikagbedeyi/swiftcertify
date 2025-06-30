import React, { useEffect, useState } from 'react'
import '../assets/Sass/footer.scss'
import logo from '../assets/Images/white-logo.PNG'
const Footer = () => {
  return (
    <footer id="colophon" class="site-footer footer-primary">
    <div class="footer-shape">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
          c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
          c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
       </svg>
    </div>
    <div class="top-footer">
       <div class="container">
          <div class="row">
             <div class="col-lg-4 col-md-6">
                <aside class="widget widget_text">
                   <div class="footer-logo">
                      <a href="index.html">
                          <figure >
                           <img src={logo} alt="" />
                         </figure>
                      </a>
                   </div>
                   <div class="textwidget widget-text">
                   Expert consulting that simplifies compliance, fuels sustainable growth, and transforms operations with clarity and confidence.
                   </div>
                </aside>
             </div>
             <div class="col-lg-4 col-md-6">
                <aside class="widget offer_menu">
                   <h3 class="widget-title">What we offer </h3>
                   <ul>
                      <li>
                         <a href="about.html"> Cloud Advisory Services</a>
                      </li>
                      <li>
                         <a href="pricing.html">Technical Business Consulting</a>
                      </li>
                      <li>
                         <a href="contact.html">Managed Support Services</a>
                      </li>
                      <li>
                         <a href="contact.html">Cybersecurity Operations and Support</a>
                      </li>
                   </ul>
                </aside>
             </div>
             <div class="col-lg-4 col-md-6">
                <aside class="widget widget_menu">
                   <h3 class="widget-title">Links</h3>
                   <ul>
                      <li>
                         <a href="about.html">About us</a>
                      </li>
                      <li>
                         <a href="pricing.html">Careers</a>
                      </li>
                      <li>
                         <a href="contact.html">Contact us</a>
                      </li>
                   </ul>
                </aside>
             </div>

             {/* <div class="col-lg-3 col-md-6">
                <aside class="widget widget-download">
                   <h3 class="widget-title">Support &amp; Downloads</h3>
                   <p>Lorem ipsum dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt ullaco laboris aliquip alora.</p>
                   <div class="widget-btn-wrap">
                      <a href="#">
                         <img src="assets/images/img4.png" alt="" />
                      </a>
                      <a href="#">
                         <img src="assets/images/img5.png" alt="" />
                      </a>
                   </div>
                </aside>
             </div> */}
          </div>
       </div>
    </div>
    <div class="bottom-footer">
       <div class="container">
          <div class="row align-items-center">
             <div class="col-md-6">
                <div class="social-links">
                   <ul>
                      <li>
                         <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="https://www.twitter.com/" target="_blank">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="https://www.youtube.com/" target="_blank">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                         </a>
                      </li>
                   </ul>
                </div>
             </div>
             <div class="col-md-6">
                <div class="copy-right">© copyright 2025 Swiftcertify Limited (745654)</div>
             </div>
          </div>
       </div>
    </div>
    <div class="overlay"></div>
 </footer>
  )
}

export default Footer

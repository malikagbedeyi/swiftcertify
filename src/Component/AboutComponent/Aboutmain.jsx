import React, { useEffect, useState } from 'react'
import '../../assets/Sass/About/aboutmain.scss'
import blog1 from "../../assets/Images/blog-img3.jpg"
import img2 from "../../assets/Images/img34.jpg"
import img3 from "../../assets/Images/pexels-04.jpeg"
import img4 from "../../assets/Images/pexels-06.avif"
const Aboutmain = ({toggleVideo}) => {
  return (
    <div>
      <div class="about-page-section">
               <div class="about-inner-page">
                  <div class="container">
                     <div class="row">
                     <div class="col-lg-5 primary left-sidebar">
                           <figure class="about-img">
                              <img src={blog1} alt="" />
                           </figure>
                           <article class="single-content-wrap">
                              <p>SwiftCertify is a reputable IT consulting firm delivering expert solutions in Information Security, IT Audit, Compliance, and Cyber GRC. With a strong focus on excellence, innovation, and client satisfaction, we help organizations protect digital assets, meet regulatory requirements, and enhance governance. Backed by a team of seasoned professionals, we provide tailored strategies that go beyond industry standards to ensure long-term cybersecurity resilience and compliance confidence.</p>
                              {/* <blockquote>
                                 <p>We combine cutting-edge technology with best practices to address today’s evolving threats. Partner with SwiftCertify for proactive, future-ready security solutions that drive trust and growth.</p>
                              </blockquote> */}
                              <p>From risk assessments to policy implementation and continuous monitoring, we support your security journey at every stage. Our mission is to simplify complex challenges and build sustainable, secure digital environments. Let us help you stay ahead in a rapidly changing threat landscape.</p>
                           </article>
                           <div class="meta-wrap">
                              <div class="tag-links">
                                 <a href="#">Application</a>,
                                 <a href="#">Support</a>,
                                 <a href="#">Technology</a>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-7">
                           <div class="about-inner-right">
                              <div class="about-content">
                              <div class="rightside-img" onClick={toggleVideo}>
                                 <figure>
                                    <img src={img3} alt="" />
                                 </figure>   
                                 <a onClick={toggleVideo}  className="popup-border popup-videos"> <i class="fa fa-play"></i></a>
                              </div>
                               <div class="section-heading">
                              <div class="sub-title">About Us</div>
                               </div>
                               <div className="text-content">
                               <p>Choose SwiftCertify for a partnership that goes beyond consultancy but one that ensures the resilience of your digital infrastructure and enhances your organization&#39;s capability to thrive in an ever-evolving digital landscape. Experience the assurance that comes with working with an industry leader where excellence and innovation converge to fortify your cybersecurity strategy.</p>
                               <blockquote>
                                 <p>We combine cutting-edge technology with best practices to address today’s evolving threats. Partner with SwiftCertify for proactive, future-ready security solutions that drive trust and growth.</p>
                              </blockquote>
                               </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="right-background-pattern"></div>
               </div>
            </div>
    </div>
  )
}

export default Aboutmain

import React, { useEffect, useState } from 'react'
import '../../assets/Sass/Home/introduction.scss'
// import img1 from  '../../assets/Images/visual-img.avif'
import img2 from '../../assets/Images/img2.png'
import img6 from '../../assets/Images/img6.png'
const Introduction = () => {
  return (
    <div className='introduction'>
      <div className="introduction-content">
        <div className="container">
            <div className="introduction-box row">
                <div className="introduction-box-content col-lg-6">
                <div class="home-about-content">
                           <div class="sub-title">INTRODUCTION OF US</div>
                           <h2 class="section-title">Turning Ambition Into Accreditation</h2>
                           <p>At SwiftCertify, we deliver tailored consulting to drive performance, simplify processes, and ensure certifications. Our experts provide actionable insights and strategies for lasting business success.</p>
                           <div class="about-list">
                              <ul>
                                 <li><i aria-hidden="true" class="fas fa-check"></i><strong>Expert Insights:</strong> Data-driven strategies for business growth.</li>
                                 <li><i aria-hidden="true" class="fas fa-check"></i><strong>Efficient Compliance:</strong> Streamlined certification and regulatory solutions</li>
                                 <li><i aria-hidden="true" class="fas fa-check"></i><strong>Tailored Solutions: </strong>Custom consulting for your unique challenges.</li>
                                 <li><i aria-hidden="true" class="fas fa-check"></i><strong>Transformative Impact:</strong> Delivering long-term, sustainable results.</li>
                              </ul>
                           </div>
                           <div class="app-rating d-flex flex-wrap">
                              <div class="app-rating-item d-flex align-items-center">
                                 <div class="rating-point">
                                    <h2>4.5</h2>
                                 </div>
                                 <div class="rating-wrap">
                                    <div class="rating-start-inner">
                                       <div class="rating-start">
                                          <span style={{width:"90%"}}></span>
                                       </div>
                                    </div>
                                    <div class="rating-review">255,000 Reviews</div>
                                 </div>
                              </div>
                              <div class="app-rating-item d-flex">
                                 <div class="rating-point">
                                    <h2>4.9</h2>
                                 </div>
                                 <div class="rating-wrap">
                                    <div class="rating-start-inner">
                                       <div class="rating-start">
                                          <span style={{width:"100%"}}></span>
                                       </div>
                                    </div>
                                    <div class="rating-review">198,000 Reviews</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                </div>
                <div className="introduction-box-content right-image col-lg-6">
                    <figure>
                        <img src={img2} alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div class="about-left-shape"></div>
      </div>
      <div class="callback-section primary-bg-callback">
               <div class="container">
                  <div class="callback-inner">
                     <div class="callback-inner-content row align-items-center">
                        <div class="col-md-6">
                           <figure class="callback-image">
                              <img src={img6} alt=""/>
                           </figure>
                        </div>
                        <div class="col-md-6">
                           <div class="callback-content">
                              <div class="sub-title">CHOOSE YOUR DEVICE PLATFORM</div>
                              <h2 class="section-title">Checkout our blog</h2>
                              <p>Get regularcurrent trends in Cybersecurity updates on the world of IT GOVERNANCE RISK AND COMPLIANCE as well as</p>
                              <div class="about-btn-list">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="overlay"></div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Introduction

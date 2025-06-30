import React, { useEffect, useState } from 'react'
import '../../assets/Sass/Home/benefit.scss'
import img1 from  '../../assets/Images/visual-img.webp';
import img2 from  '../../assets/Images/visual-img2.avif';
import img3 from  '../../assets/Images/visual-img4.webp';
import img4 from  '../../assets/Images/visual-img5.avif';
const Benefit = () => {
  return (
    <div className='benefit'>

            <section class="section-testimonial">
               <div class="container">
                  <div class="section-heading text-center">
                     <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                        <div class="sub-title">OUR BENEFITS</div>
                           <h2 class="section-title">Strategic Advantages That Set You Ahead</h2>
                           <p>We deliver expert-driven, efficient, and scalable solutions that help reduce risk, enhance performance, and position your business for long-term success.</p>
                        </div>
                     </div>
                  </div>
                  <div class="testimonial-inner">
                     <div class="row">
                        <div class="col-md-6">
                           <div class="testimonial-item d-flex flex-wrap align-items-center">
                              <figure class="testimonial-img">
                                 <img src={img1} alt="" />
                              </figure>
                              <div class="testimonial-content">
                                 <h3>Reduced Risk Exposure</h3>
                                 <p>“Through robust risk assessments and compliance strategies, we help identify vulnerabilities early—saving you from costly fines, security threats, and operational breakdowns.”</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="testimonial-item d-flex flex-wrap align-items-center">
                              <figure class="testimonial-img">
                                 <img src={img2} alt="" />
                              </figure>
                              <div class="testimonial-content">
                                 <h3> Smarter Business Decisions</h3>
                                 <p>“Backed by real-world data and industry insights, our advisory services provide a clear roadmap for operational improvements, cost reductions, and strategic growth.”</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="testimonial-item d-flex flex-wrap align-items-center">
                              <figure class="testimonial-img">
                                 <img src={img3} alt="" />
                              </figure>
                              <div class="testimonial-content">
                                 <h3>Operational Efficiency</h3>
                                 <p>“We fine-tune your business processes to cut redundancy, boost productivity, and ensure every action aligns with your company’s mission and goals.”</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="testimonial-item d-flex flex-wrap align-items-center">
                              <figure class="testimonial-img">
                                 <img src={img4} alt="" />
                              </figure>
                              <div class="testimonial-content">
                                 <h3>Expert Support, Every Step</h3>
                                 <p>“From initial consultation to post-certification maintenance, we’re with you all the way—offering guidance, resources, and reassurance when you need it most.”</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="overlay"></div>
            </section>
    </div>
  )
}

export default Benefit

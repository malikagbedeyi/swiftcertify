import React, { useEffect, useState } from 'react'
import '../../assets/Sass/About/aboutservice.scss'
import img1  from '../../assets/Images/pexels-01.jpeg'
import img2  from '../../assets/Images/pexels-02.webp'
import img3  from '../../assets/Images/pexels-03.jpeg'
import img4  from '../../assets/Images/pexels-04.jpeg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const AboutService = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   
const settings = {
    dots: false,
    draggable: true,       
    swipe: true,           
    touchMove: true, 
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (old, next) => setActiveIndex(next),
  };

  return (
    <div className='service'>
      <section class="app-section">
               <div class="app-shape">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                     <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                     c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                     c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                  </svg>
               </div>
               <div class="container">
                  <div class="section-heading text-center">
                     <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                           <div class="sub-title">Our Services</div>
                           {/* <h2 class="section-title">Our App Screenshots</h2>
                           <p>Et optio praesent et! Eligendi ab, irure impedit rhoncus, doloremque! Pretium nobis nobis modi ullamco excepturi recusandae et! Nec scelerisque, natus gravida.</p> */}
                        </div>
                     </div>
                  </div>
                  <div class="app-slider-inner">
                        <div class=" draggable">
                               <Slider {...settings} class="slick-track">
                        <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 0 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                Information Security
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                    <p>In an ever-evolving digital landscape, protecting your organization from cyber threats is paramount.</p>
                                    <p>Our Information Security services strengthen your defenses, reduce risks, and deliver tailored protection for your needs.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                           
                        </div>
                        <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 1 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                IT Audit
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                    <p>Our IT Audit services provide a deep assessment of your systems to support informed decisions and strengthen IT infrastructure.</p>
                                    <p>We enhance IT governance with insights on compliance, audits, and asset optimization.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                        </div>
                        <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 2 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                Compliance
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                  <p>SwiftCertify’s Compliance services simplify regulatory challenges, helping clients meet industry standards and legal obligations with expert guidance.</p>
                                  <p>We provide Compliance Assessments, Policy Setup, Monitoring, and Remediation Support.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                        </div>
                        <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 3 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                Information Security
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                    <p>In an ever-evolving digital landscape, protecting your organization from cyber threats is paramount.</p>
                                    <p>Our Information Security services strengthen your defenses, reduce risks, and deliver tailored protection for your needs.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                           
                        </div>
                        {/* <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 4 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                IT Audit
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                    <p>Our IT Audit services provide a deep assessment of your systems to support informed decisions and strengthen IT infrastructure.</p>
                                    <p>We enhance IT governance with insights on compliance, audits, and asset optimization.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                        </div> */}
                         {/* <div class="app-slider-item ">
                            <div className={`app-slider-item-content${activeIndex % 5 === 4 ? " active" : ""}`}>
                                <div className="top-slider-item">
                                Compliance
                                </div>
                                <div className="middle-slider-item">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="bottom-slider-item">
                                 <div className="text-content">
                                  <p>SwiftCertify’s Compliance services simplify regulatory challenges, helping clients meet industry standards and legal obligations with expert guidance.</p>
                                  <p>We provide Compliance Assessments, Policy Setup, Monitoring, and Remediation Support.</p>
                                 </div>
                                </div>
                                 <div className="overlay"></div>
                            </div>
                        </div> */}
                        </Slider>
                         </div>
                  </div>
               </div>
               <div class="app-center-shape"></div>
            </section>
    </div>
  )
}

export default AboutService

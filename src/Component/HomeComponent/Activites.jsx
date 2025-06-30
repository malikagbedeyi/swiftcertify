import React, { useEffect, useState } from 'react'
import '../../assets/Sass/Home/activities.scss'
import img1 from  '../../assets/Images/img11.png'

const Activites = () => {
   const CountUp = ({ target = 50, duration = 1000 }) => {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        const stepTime = Math.floor(duration / end);
    
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) {
            clearInterval(timer);
          }
        }, stepTime);
    
        return () => clearInterval(timer); // Cleanup on unmount
      }, [target, duration]);
    
      return <span>{count}</span>;
    };

  return (  
    <div className='activite'> 
      <div class="counter-section counter-section-blue">
               <div class="container">
                  <div class="counter-inner">
                     <div class="counter-item-wrap">
                        <div class="row">
                           <div class="col-md-3 col-6">
                              <div class="counter-item">
                              <i class="fa-solid fa-arrow-up-right-dots"></i>
                                 <span class="counter-no">
                                    {/* <span class="counter">23</span> */}
                                    <CountUp target={23} duration={1300} />
                                 </span>
                                 <span class="counter-text">
                                    Fast grow project team
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-3 col-6">
                              <div class="counter-item">
                              <i class="fa-solid fa-check"></i>
                                 <span class="counter-no">
                                 <CountUp target={15} duration={1000} />
                                 </span>
                                 <span class="counter-text">
                                    Project Complete
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-3 col-6">
                              <div class="counter-item">
                              <i class="fa-solid fa-users"></i>
                                 <span class="counter-no ">
                                 <CountUp target={10} duration={800} />
                                 </span>
                                 <span class="counter-text">
                                   Clients
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-3 col-6">
                              <div class="counter-item count">
                              <i class="fa-solid fa-thumbs-up"></i>
                                 <span class="counter-no">
                                 <CountUp target={95} duration={2000} />%
                                 </span>
                                 <span class="counter-text">
                                 Excellent service rating
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="overlay"></div>
                     <div class="counter-img">
                        <img src={img1} alt="" />
                     </div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Activites

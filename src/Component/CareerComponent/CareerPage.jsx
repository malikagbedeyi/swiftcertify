import React, { useState } from 'react'
import img1 from '../../assets/Images/career.jpg'
import  '../../assets/Sass/Career/style.scss'

const CareerPage = () => {
    const [collapse, setcollapse] = useState(true);
    const [collapse2, setcollapse2] = useState(false);
    const [collapse3, setcollapse3] = useState(false);

    const [tab, setTab] = useState(1); 

const handleTab = (index) => {
  if (index !== tab) {
    setTab(index);
  }
};
  
    const handlecollapse = () => {
        setcollapse(!collapse)
        setcollapse2(false)
        setcollapse3(false)
    };
    const handlecollapse2 = () => {
        setcollapse(false)
        setcollapse2(!collapse2)
        setcollapse3(false)
    };
    const handlecollapse3 = () => {
        setcollapse(false)
        setcollapse2(false)
        setcollapse3(!collapse3)
    };

  return (
    <div className='career'> 
    .  <div className="career-detail-section">
      <div class="career-detail-inner">
                  <div class="container">
                     <div class="row">
                        <div class="col-lg-8">
                           <div class="career-detail-container">
                              <div class="job-description">
                                 <ul>
                                    <li>
                                       <span>Post :</span>
                                       <h5>Developer</h5>
                                    </li>
                                    <li>
                                       <span>Time :</span>
                                       <h5>Full Time</h5>
                                    </li>
                                    <li>
                                       <span>Salary :</span>
                                       <h5>Negotaible</h5>
                                    </li>
                                    <li>
                                       <span>No. of Vacancy :</span>
                                       <h5>8</h5>
                                    </li>
                                 </ul>
                                 <figure class="job-image">
                                    <img src={img1} alt="" />
                                 </figure>
                              </div>
                              <div class="tab-container">
                                 <div class="responsive-tabs">
                                    <ul class="nav nav-tabs" >
                                       <li   onClick={() => handleTab(1)} className={`nav-item ${tab === 1 ? 'active-head' : 'inActive'}`}>
                                          <a  class="nav-link active">
                                             Job Description
                                          </a>
                                       </li>
                                       <li  onClick={() => handleTab(2)}  className={`nav-item ${tab === 2 ? 'active-head ' : 'inActive'}`}>
                                          <a  class="nav-link">
                                             Experience &amp; Overview
                                          </a>
                                       </li>
                                       <li   onClick={() => handleTab(3)} className={`nav-item ${tab === 3 ? 'active-head' : 'inActive'}`}>
                                          <a  class="nav-link">
                                             Requirement
                                          </a>
                                       </li>
                                    </ul>

                                    <div  class="tab-content">
                                       <div  class="card">
                                          <div   className="card-header">
                                             <h5 class="mb-0">  <a> Description </a> </h5>
                                          </div>
                                          <div class="collapse">
                                             <div  className={`card-body ${tab === 1 ? 'active' : 'd-none'}`}> 
                                                <p>Reprehenderit hic bibendum repellendus, repellat auctor! Integer temporibus, facilisis iaculis alias senectus, non quam molestiae incidunt cubilia, fuga? Quasi natoque dicta a fuga dapibus dolore molestie sociis erat, convallis quibusdam possimus semper nonummy mattis, quasi.</p>
                                                <p>Autem nec quaerat cubilia magnam eu mauris hic hac nisi eos nobis officiis corrupti consequuntur molestie urna volutpat! Quos diamlorem convallis vestibulum doloremque iste facilisi.</p>
                                                <ul>
                                                   <li>Nunc minima aspernatur dignissimos, sit adipiscing? Cupidatat cursus.</li>
                                                   <li>Netus donec justo mauris etiam velit.</li>
                                                   <li>Quis dolorum habitasse accusantium hic consequat.</li>
                                                   <li>Mus quasi aute non, at, saepe? Commodi sodales aliquam voluptatum.</li>
                                                   <li>Adipisicing ullamcorper dapibus, consequatur itaque eros orci odio.</li>
                                                   <li>Lobortis facere accusamus nemo, ipsum ad morbi.</li>
                                                   <li>Netus donec justo mauris etiam velit.</li>
                                                   <li>Quis dolorum habitasse accusantium hic consequat.</li>
                                                </ul>
                                                <p>Autem nec quaerat cubilia magnam eu mauris hic hac nisi eos nobis officiis corrupti consequuntur molestie urna volutpat! Quos diamlorem convallis vestibulum doloremque iste facilisi vallis vestibulum dol.</p>
                                             </div>
                                          </div>
                                       </div>

                                       <div  class="card" >
                                           <div  className="card-header">
                                               <h5 class="mb-0"><a>Overview</a></h5>
                                          </div>
                                          <div  class="collapse">
                                             <div className={`card-body ${tab === 2 ? 'active' : 'd-none'}`}>
                                                <h5>#OVERVIEW</h5>
                                                <p>Reprehenderit hic bibendum repellendus, repellat auctor! Integer temporibus, facilisis iaculis alias senectus, non quam molestiae incidunt cubilia, fuga? Quasi natoque dicta a fuga dapibus dolore molestie sociis erat, convallis quibusdam possimus semper nonummy mattis, quasi.</p>
                                                <br />
                                                <h5>#EXPERIENCE</h5>
                                                <p>Curae ad viverra odit porta, dolore, nascetur placeat. Exercitation vulputate modi rhoncus occaecat etiam erat cras erat cumque harum, repellendus. Voluptatem rem porttitor minim nihil.Curae ad viverra odit porta, dolore, nascetur placeat. Exercitation vulputate modi rhoncus occaecat etiam erat cras erat cumque harum, repellendus. Voluptatem rem porttitor minim nihil.</p>
                                             </div>
                                          </div>
                                       </div>

                                       <div  class="card " >
                                          <div   className="card-header">
                                             <h5 class="mb-0"> <a>Requirement </a> </h5>
                                          </div>
                                          <div  class="collapse">
                                             <div className={`card-body ${tab === 3 ? 'active' : 'd-none'}`}>
                                                <p>
                                                   Culpa cupidatat occaecat neque hic sollicitudin provident nascetur felis, sollicitudin nonummy class explicabo litora sed. Sapien, nobis consequatur consequatur eaque. Incidunt. Ex? Repellat voluptates dignissim! Aliquam velit natoque aspernatur maiores.
                                                </p>
                                                <ul>
                                                   <li>Nunc minima aspernatur dignissimos, sit adipiscing? Cupidatat cursus.</li>
                                                   <li>Netus donec justo mauris etiam velit.</li>
                                                   <li>Quis dolorum habitasse accusantium hic consequat.</li>
                                                   <li>Mus quasi aute non, at, saepe? Commodi sodales aliquam voluptatum.</li>
                                                   <li>Adipisicing ullamcorper dapibus, consequatur itaque eros orci odio.</li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                   </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-4 order-lg-first">
                           <div class="sidebar">
                              <div class="widget-bg sidebar-list">
                                 <h5 class="bg-title">How to apply?</h5>
                                 <ul>
                                    <li><i class="fas fa-minus"></i>Nunc expedita montes minima.</li>
                                    <li><i class="fas fa-minus"></i>Animi atque ornare iaculis.</li>
                                    <li><i class="fas fa-minus"></i>Sociosqu scelerisque adipisci.</li>
                                    <li><i class="fas fa-minus"></i>Purus eveniet incidi dunt.</li>
                                    <li><i class="fas fa-minus"></i>Animi atque ornare iaculis.</li>
                                 </ul>
                              </div>
                              <div class="widget-bg faq-widget">
                                 <h5 class="bg-title">Frequently Asked Questions</h5>
                                 <div class="accordion-content">
                                    <div  class="card">
                                       <div onClick={handlecollapse}  class={collapse ? "card-header": "card-header iconclose"}>
                                          <h6>
                                             <a>
                                                When the Announcements?
                                             </a>
                                          </h6>
                                       </div>
                                          <div class={collapse?"card-body":"d-none"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </div>
                                    </div>
                                    <div  class="card ">
                                        <div  onClick={handlecollapse2} class={collapse2 ? "card-header": "card-header iconclose"}>
                                            <h6 class="mb-0">
                                             <a>Can i apply after rejection? </a>
                                          </h6>
                                       </div>
                                       <div  class="">
                                         <div class= {collapse2?"card-body":"d-none"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> </div>
                                    </div>
                                    <div  class="card ">
                                        <div onClick={handlecollapse3}  class={collapse3 ? "card-header": "card-header iconclose"}>
                                          <h6 class="mb-0">
                                             <a class="collapsed" >Where to Interview? </a>
                                          </h6>
                                       </div>
                                          <div class={collapse3?"card-body":"d-none"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="widget-bg upload-widget text-center">
                                 <div class="widget-icon">
                                    <i class="fas fa-file-invoice"></i>
                                 </div>
                                 <h4>Send us your C.V.</h4>
                                 <p>Do you want to work with us? Please, send your CV to <a href="#">domain123@gmail.com</a></p>
                                 <span class="or-style">OR</span>
                                 <a href="contact.html" class="button-round">CONTACT US</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right-background-pattern"></div>
    </div></div>
  )
}

export default CareerPage

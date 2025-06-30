import React, { useEffect, useState } from 'react'
import '../../assets/Sass/Home/product.scss'

const Product = () => {
  return (
    <div className='product'>
      <div className="product-container">
        <div className="container">
        <div className="product-content row">
            <div className="product-content-box col-lg-4">
                <div className="product-item">
                <div class="item-head">
                <i class="bi bi-cloud-hail"></i>
                {/* <i aria-hidden="true" className="icon icon-cloud-computing"></i> */}
                <span class="count-no">01.</span>
                </div>
                <div class="item-content">
                    <h4>
                     <a href="single-page.html">Smart Compliance</a>
                </h4>
                <p>Streamlined solutions to meet standards quickly and keep your business audit-ready.</p>
                </div>
                <div class="item-footer">
                     <a href="" class="outline-round">Read More</a>
                </div>
                </div>
             </div>
             <div className="product-content-box col-lg-4">
                <div className="product-item">
                <div class="item-head">
                <i class="bi bi-cloud-hail"></i>
                {/* <i aria-hidden="true" className="icon icon-cloud-computing"></i> */}
                <span class="count-no">02.</span>
                </div>
                <div class="item-content">
                    <h4>
                     <a href="single-page.html">Trusted Insight</a>
                </h4>
                <p>Expert guidance to help you make confident, forward-thinking business decisions.</p>
                </div>
                <div class="item-footer">
                     <a href="" class="outline-round">Read More</a>
                </div>
                </div>
             </div>
             <div className="product-content-box col-lg-4">
                <div className="product-item">
                <div class="item-head">
                <i class="bi bi-cloud-hail"></i>
                {/* <i aria-hidden="true" className="icon icon-cloud-computing"></i> */}
                <span class="count-no">03.</span>
                </div>
                <div class="item-content">
                    <h4>
                     <a href="single-page.html">Insight-Driven Advisory</a>
                </h4>
                <p>Leverage real-world experience and data-backed strategies to transform your business with confidence and clarity.    </p>
                </div>
                <div class="item-footer">
                     <a href="" class="outline-round">Read More</a>
                </div>
                </div>
             </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product

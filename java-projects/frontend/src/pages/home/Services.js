/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imgsp1 from '../../assets/images/posts/1.jpg';
import imgsp3 from '../../assets/images/posts/2.jpg';
import imgsp4 from '../../assets/images/posts/3.jpg';
import imgsp5 from '../../assets/images/posts/4.jpg';

import '../../assets/js/bootstrap.bundle.min.js'
const Services =()=>(
    <section  class="padding-bottom">

    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Trade services</h4>
    </header>
    
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src={imgsp1} class="card-img-top"/>
              <div class="card-body">
                <h6 class="title">Trade Assurance</h6>
                <p class="small text-uppercase text-muted">Order protection</p>
              </div>
            </article> 
        </div> 
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src={imgsp5} class="card-img-top"/>
              <div class="card-body">
                <h6 class="title">Pay anytime</h6>
                <p class="small text-uppercase text-muted">Finance solution</p>
              </div>
            </article> 
        </div> 
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src={imgsp3} class="card-img-top"/>
              <div class="card-body">
                <h6 class="title">Inspection solution</h6>
                <p class="small text-uppercase text-muted">Easy Inspection</p>
              </div>
            </article> 
        </div> 
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src={imgsp4}class="card-img-top"/>
              <div class="card-body">
                <h6 class="title">Ocean and Air Shipping</h6>
                <p class="small text-uppercase text-muted">Logistic services</p>
              </div>
            </article> 
        </div> 
    </div> 
    
    </section>
);
export default Services
import React from "react";
import imgSlider from '../../assets/images/banners/Banner1.webp'
import imgSlider2 from '../../assets/images/banners/Banner2.webp'
import imgSlider4 from '../../assets/images/banners/1.jpg'
import '../../assets/js/bootstrap.bundle.min.js'
const Slider =()=>(
      <section class="section-main ">
                    
                        <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                                    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" >
                                    <div class="carousel-item active" >
                                        <img src={imgSlider} alt="First slide" />

                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgSlider2} alt="Second slide"  />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgSlider4} alt="Second slide"  />
                                    </div>
                                   
                                </div>
                                <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
        </section>
);
export default Slider
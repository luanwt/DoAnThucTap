/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imgsp1 from '../../assets/images/icons/flags/AU.png';
import imgsp3 from '../../assets/images/icons/flags/RU.png';
import imgsp4 from '../../assets/images/icons/flags/CN.png';
import imgsp5 from '../../assets/images/icons/flags/TR.png';
import imgsp6 from '../../assets/images/icons/flags/DE.png';
import imgsp7 from '../../assets/images/icons/flags/US.png';
import imgsp8 from '../../assets/images/icons/flags/UZ.png';
import imgsp9 from '../../assets/images/icons/flags/IN.png';
import '../../assets/js/bootstrap.bundle.min.js'
const Region =()=>(
    <section  class="padding-bottom">

    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Choose region</h4>
    </header>
    
    <ul class="row mt-4">
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp1}/> <span>Australia</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp3}/> <span>Germany</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp4}/> <span>China</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp5}/> <span>Russia</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp6}/> <span>India</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp7}/> <span>England</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp8}/> <span>Turkey</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={imgsp9}/> <span>Uzbekistan</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
    </ul>
    </section>
);
export default Region
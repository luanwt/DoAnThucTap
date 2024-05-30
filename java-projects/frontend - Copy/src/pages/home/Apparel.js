import React from "react";
import imgsp1 from '../../assets/images/items/1.jpg';
import imgsp3 from '../../assets/images/items/2.jpg';
import imgsp4 from '../../assets/images/items/3.jpg';
import imgsp5 from '../../assets/images/items/4.jpg';
import imgsp6 from '../../assets/images/items/5.jpg';
import imgsp7 from '../../assets/images/items/6.jpg';
import imgsp8 from '../../assets/images/items/7.jpg';
import imgsp9 from '../../assets/images/items/8.jpg';
import imgsp10 from '../../assets/images/items/9.jpg';
const Apparel =()=>(
    <section class="padding-bottom">
<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Apparel</h4>
</header>

<div class="card card-home-category">
<div class="row no-gutters">
	<div class="col-md-3">
	
	<div class="home-category-banner bg-light-orange">
		<h5 class="title">Best trending clothes only for summer</h5>
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
		<img src="images/items/2.jpg" class="img-bg"/>
	</div>

	</div> 
	<div class="col-md-9">
<ul class="row no-gutters bordered-cols">
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Well made women clothes with trending collection  </h6>
		<img class="img-sm float-right" src={imgsp10}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Great clothes with trending collection  </h6>
		<img class="img-sm float-right" src={imgsp1}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Beijing, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Demo clothes with sample collection  </h6>
		<img class="img-sm float-right" src={imgsp3}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src={imgsp5}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
	</div>
</a>	
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src={imgsp4}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> London, Britain</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src={imgsp6}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Well made clothes with trending collection </h6>
		<img class="img-sm float-right" src={imgsp7}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen interior  stuff collection   </h6>
		<img class="img-sm float-right" src={imgsp8}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
</ul>
	</div> 
</div> 
</div> 
</section>
);
export default Apparel
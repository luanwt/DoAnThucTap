import React from "react";
const Filter = () => (
    <div class="card mb-3">
	<div class="card-body">
<div class="row">
	<div class="col-md-2"> Your are here: </div>
	<nav class="col-md-8"> 
	<ol class="breadcrumb">
	    <li class="breadcrumb-item"><a href="#">Home</a></li>
	    <li class="breadcrumb-item"><a href="#">Category name</a></li>
	    <li class="breadcrumb-item"><a href="#">Sub category</a></li>
	    <li class="breadcrumb-item active" aria-current="page">Items</li>
	</ol>  
	</nav> 
</div> 
</div>
<div class="row">
	<div class="col-md-2">Filter by</div>
	<div class="col-md-10"> 
		<ul class="list-inline">
		  <li class="list-inline-item mr-3 dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
            <div class="dropdown-menu p-3" >	
		      <label class="form-check">
		      	 <input type="radio" name="myfilter" class="form-check-input"/> Good supplier
		      </label>
		      <label class="form-check">	
		      	 <input type="radio" name="myfilter" class="form-check-input"/> Best supplier
		      </label>
		      <label class="form-check">
		      	 <input type="radio" name="myfilter" class="form-check-input"/> New supplier
		      </label>
            </div> 
	      </li>
	      <li class="list-inline-item mr-3 dropdown">
	      	<a href="#" class="dropdown-toggle" data-toggle="dropdown">  Country </a>
            <div class="dropdown-menu p-3">	
		      <label class="form-check"> 	 <input type="checkbox" class="form-check-input"/> China    </label>
		      <label class="form-check">   	 <input type="checkbox" class="form-check-input"/> Japan      </label>
		      <label class="form-check">    <input type="checkbox" class="form-check-input"/> Uzbekistan  </label>
		      <label class="form-check">  <input type="checkbox" class="form-check-input"/> Russia     </label>
            </div> 
	      </li>
		  <li class="list-inline-item mr-3 dropdown">
		  	<a href="#" class="dropdown-toggle" data-toggle="dropdown">Feature</a>
		  	<div class="dropdown-menu">
		  		<a href="" class="dropdown-item">Anti backterial</a>
		  		<a href="" class="dropdown-item">With buttons</a>
		  		<a href="" class="dropdown-item">Extra safety</a>
		  	</div>
		  </li>
		  <li class="list-inline-item mr-3"><a href="#">Color</a></li>
		  <li class="list-inline-item mr-3"><a href="#">Size</a></li>
		  <li class="list-inline-item mr-3">
		  	<div class="form-inline">
		  		<label class="mr-2">Price</label>
				<input class="form-control form-control-sm" placeholder="Min" type="number"/>
					<span class="px-2"> - </span>
				<input class="form-control form-control-sm" placeholder="Max" type="number"/>
				<button type="submit" class="btn btn-sm btn-light ml-2">Ok</button>
			</div>
		  </li>
		  <li class="list-inline-item mr-3">
		  	<label class="custom-control mt-1 custom-checkbox">
			  <input type="checkbox" class="custom-control-input"/>
			  <div class="custom-control-label">Ready to ship
			  </div>
			</label>
		  </li>
		</ul>
	</div> 
	</div>
</div>
);
export default Filter
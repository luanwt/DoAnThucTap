/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const Request =()=>(
	
	<section class="padding-bottom">
	<header class="section-heading heading-line">
	 <h4 class="title-section text-uppercase">Mua số lượng lớn</h4>
	</header>
	
	<div class="row">
	 <div class="col-md-8">
	<div class="card-banner banner-quote overlay-gradient">
	  <div class="card-img-overlay white">
		<h3 class="card-title">Gửi yêu cầu đến nhà cung cấp 1 cách dễ dàng</h3>

		<a href="" class="btn btn-primary rounded-pill">Tìm hiểu thêm</a>
	  </div>
	</div>
	 </div> 
	 <div class="col-md-4">
	
	<div class="card card-body">
	 <h4 class="title py-3">Một yêu cầu,nhiều mức giá</h4>
	 <form>
	  <div class="form-group">
	   <input class="form-control" name="" placeholder="Bạn cần tím kiếm thứ gì?" type="text"/>
	  </div>
	  <div class="form-group">
	   <div class="input-group">
		<input class="form-control" placeholder="Số lượng" name="" type="text"/>
		
		<select class="custom-select form-control">
		 <option>Phần</option>
		 <option>Lít</option>
		 <option>Tấn</option>
		 <option>Số lượng</option>
		</select>
	   </div>
	  </div>
	  <div class="form-group text-muted">
	   <p>Chọn mẫu</p>
	   <label class="form-check form-check-inline">
		 <input class="form-check-input" type="checkbox" value="option1"/>
		  <span class="form-check-label">Loại 1</span>
	   </label>
	   <label class="form-check form-check-inline">
		 <input class="form-check-input" type="checkbox" value="option2"/>
		 <span class="form-check-label">Loại 2</span>
	   </label>
	  </div>
	  <div class="form-group">
	   <button class="btn btn-warning">Yêu cầu báo giá</button>
	  </div>
	 </form>
	</div>
	
	 </div> 
	</div> 
	</section>

);
export default Request
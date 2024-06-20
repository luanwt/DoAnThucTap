/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
const CTOrderP = () => {
	// const  storedUserInfo  = localStorage.getItem('orders');
	// const  retrievedUserInfo = JSON.parse(storedUserInfo);

	// const [orders, setorders] = useState({});
	
    // const storedUserInfo = localStorage.getItem('Account');
    // const storedUserInfo1 = localStorage.getItem('Account1');

    // const retrievedUserInfo = JSON.parse(storedUserInfo);

	// useEffect(() => {	
	// 	GET_ALL(`orders/user/${retrievedUserInfo.id}`).then((item) => setorders(item.data));
	// }, []);

	return(
<>
<main class="col-md-9">

		<article class="card mb-4">	
		<header class="card-header">
		</header>
		<div class="card-body">
			<div class="row"> 
				<div class="col-md-8">
					<h6 class="text-muted">Vận chuyển đến</h6>
					<p>Trần Minh Luân<br></br>  
					Điện thoại:0394582058 Email: luancui281103@gmail.com <br></br>
			    	Địa điểm: 44/109 Tân Chánh Hiệp Q12,TP Hồ Chí Minh. <br></br> 
			 		</p>
				</div>
				{/* <div class="col-md-4">
					<h6 class="text-muted">Thanh toán</h6>
					<span class="text-success">
						<i class="fab fa-lg fa-cc-visa"></i>
					</span>
					<p>Sản phẩm: {retrievedUserInfo.price}<br></br>
					 Phí ship:  26 000 vnd <br></br> 
					 <span class="b">Tổng:  3 586 000 vnd </span>
					</p>
				</div> */}
			</div> 
		</div> 
		<div class="table">
		<table class="table ">
			{/* <tr>
				<td>
					<img src={`./images/items/${retrievedUserInfo.image}`} class="img-xs border"/>
				</td>
				<td> 
					<p class="title ">Ten san pham:{retrievedUserInfo.name}</p>
					<p class="title ">so luong{retrievedUserInfo.qual}</p>
					<var class="price text-muted">{retrievedUserInfo.price}</var>
				</td>
				<td> Người bán <br></br>  shop Chú Dê Con </td>

				<td>
		
					<div class="dropdown ">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Đánh giá</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item"> ⭐ ⭐ ⭐ ⭐ ⭐</a>
						 	<a href="#"  class="dropdown-item"> ⭐ ⭐ ⭐ ⭐</a>
							 <a href="#"  class="dropdown-item"> ⭐ ⭐ ⭐ </a>
							 <a href="#"  class="dropdown-item"> ⭐ ⭐</a>
							 <a href="#"  class="dropdown-item"> ⭐ </a>
						 </div>
					</div> 
				</td>
			</tr> */}

		</table>
		</div> 
		


		</article>


	</main> 
</>
);
}

export default CTOrderP
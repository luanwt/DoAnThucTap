/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { GET_ID } from "../../api/apiService";
import { useLocation, Link } from "react-router-dom";
import ShoppingCart from "../../Component/layouts/Shoppingcart"
import { CookiesProvider, useCookies } from "react-cookie";
import Login from "../../Component/layouts/Login";
import { error } from "jquery";
import { Button } from "react-bootstrap";
import { colors } from "@mui/material";
const cardTextStyle = {

	maxWidth: "80%",
};
// localStorage.setItem('cartItems',JSON.stringify([]));
const Section1 = () => {
	const [product, setProduct] = useState({});
	
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const productId = queryParams.get("productId");
	useEffect(() => {	
		GET_ID(`products`, productId).then((item) => setProduct(item.data));
	}, [productId]);

	function addtocart2()
	{
		alert("add thanh cong")
	}

	
	let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

	// function addtocartreal(){
	// 	let newItem = {
	// 		id:product.id,
	// 		name: product.name,
	// 		price:product.discount*handleClick(),
	// 		image:a,
	// 		qual:u,
	// 	  };
	// 	cartItems.push(newItem);
	// 	localStorage.setItem('cartItems', JSON.stringify(cartItems));
	// 	alert("add thanh cong");
	// 	window.location.href = "/shopping-cart";
	// }
	function addtocart()
	{
			let a=product.image
			var x = document.getElementById("qual");
			let u= parseInt(x.value);	
			if (cartItems != null) {
				var boll=true;
			  cartItems.forEach(item => {
				if(item.id==product.id){
					item.qual+=1;
					alert("add thanh cong");
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
					window.location.href = "/shopping-cart";
					boll=false;
				}
			  });
				if(boll==true){
					let newItem = {
						id:product.id,
						name: product.name,
						price:product.discount,
						image:a,
						qual:u,
					};
					cartItems.push(newItem);
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
					alert("add thanh cong");
					window.location.href = "/shopping-cart";
				}	
			}
	
		}
		
	  const [inputValue, setInputValue] = useState(1);
	
	  // Function to handle input changes
	  const handleInputChange = (e) => {
		const value = e.target.value;
		if (Number.isInteger(parseInt(value, 10)) && parseInt(value, 10) > 0) {
			setInputValue(e.target.value);
		}
	  };
	
	  // Use the input value in your component logic
	  const handleClick = () => {
		const myValue = inputValue; // Assign the input value to a constant
		// Use the constant 'myValue' as needed
		return myValue
	  };
	return (
		<section>
			<section className="py-3 bg-light">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a>Home</a>
						</li>
						<li className="breadcrumb-item">
							<a>{product.category && product.category.name}</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">

							{product.name}
						</li>
					</ol>
				</div>
			</section>
			<section className="section-content bg-white padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-6">
							<div className="card">
								<article className="gallery-wrap">
									<div className="img-big-wrap">
										<div>
											<a href="#">
												<img src={`./images/items/${product.image}`} />
											</a>
										</div>
									</div>
									
								</article>
							</div>
						</aside>
						<main className="col-md-6">
							<article className="product-info-aside">
								<h2 className="title mt-3">{product.name} </h2>	
								<div class="rating-wrap my-3">
									<ul class="rating-stars">
										<li jstyle={cardTextStyle} class="stars-active">
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</li>
										<li>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</li>
									</ul>
									<small class="label-rating text-muted">132 reviews</small>
									<small class="label-rating text-success">
										<i class="fa fa-clipboard-check"></i> 154 orders{" "}
									</small>
								</div>
								<div class="mb-3">
									<h2 class="title mt-3">Gia: {product.discount}
										<a>
											vnd
										</a>
									</h2>
									<del class="text-muted">Gia goc: {product.price}</del>
									<a>
										vnd
									</a>
								</div>
								<p>
									{" "}
								</p>
								<dl class="row">
									<dt class="col-sm-3">Thương Hiệu</dt>
									<dd class="col-sm-9">
										<a href="#">{product.brand}</a>
									</dd>
									<dt class="col-sm-3">Mô tả</dt>
									<dd class="col-sm-9">{product.description}</dd>
									<dt class="col-sm-3">Hạn sử dụng</dt>
									<dd class="col-sm-9">2 year</dd>
									<dt class="col-sm-3">Thời gian giao hàng</dt>
									<dd class="col-sm-9">3-4 tuần</dd>
									<Button className="nav-link" style={{background:"red", maxWidth:120, borderRadius:80}}  onClick={addtocart2}>
										<span class="text">Thêm vào Yeu thich</span> </Button>
								</dl>
								<div class="form-row mt-4">
									<div class="form-group col-md flex-grow-0">
										<div class="input-group mb-3 input-spinner">
											<div class="input-group-prepend">
												
												<li class="list-inline-item mr-3">
														
													<div class="form-inline">
														<label class="mr-2">So luong</label>

														<input class="form-control form-control-sm"   value={inputValue} type="number"  id="qual" onChange={handleInputChange}></input>
														
														{/* <button type="submit" class="btn btn-sm btn-light ml-2">Ok</button> */}
														{/* <div>{product.quality}</div> */}
													</div>
												</li>
											</div>
										</div>
									</div>
						
									<div class="form-group col-md">
										<a href="#" class="btn btn-primary">
											<i class="fas fa-shopping-cart"></i>{""}
											<Button className="nav-link"  onClick={addtocart}>
												<span class="text">Thêm vào giỏ hàng</span> </Button>
												
										</a>
										
										<a href="#" class="btn btn-light" >
											<i class="fas fa-envelope"></i>{" "}
											<span class="text">Liên hệ với nhà cung cấp</span>
										</a>
									</div>
								</div>
							
								<h5 class="title mt-3" style={{color:"red"}}>Tong cong:{product.discount*handleClick()/1000}K vnd</h5>
							</article>
						</main>
					</div>
				</div>
			</section>
			<section class="section-name padding-y bg">
			
			</section>
		</section>
	);
};
export default Section1;
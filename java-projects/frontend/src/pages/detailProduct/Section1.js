/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { GET_ALL, GET_ID, POST_ADD } from "../../api/apiService";
import { useLocation } from "react-router-dom";
import ShoppingCart from "../../Component/layouts/Shoppingcart"
import { CookiesProvider, useCookies } from "react-cookie";
import Login from "../../Component/layouts/Login";
import { error } from "jquery";
import { Button } from "react-bootstrap";
import { Checkbox, colors, FormControlLabel } from "@mui/material";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const cardTextStyle = {

	maxWidth: "80%",
};
// function addtocartreal(){
// 	let newItem = {
// 		id:product.id,
// 		name: product.name,
// 		price:product.discount*handleClick(),
// 		image:a,
// 		quality:u,
// 	  };
// 	cartItems.push(newItem);
// 	localStorage.setItem('cartItems', JSON.stringify(cartItems));
// 	alert("add thanh cong");
// 	window.location.href = "/shopping-cart";
// }
// localStorage.setItem('cartItems',JSON.stringify([]));
const Section1 = () => {
	const [product, setProduct] = useState({});
	const [selectedSize, setSelectedSize] = useState('S');
	const [feedbacks, setfeedback] = useState([]);
	const navigate = useNavigate(); // Hook to navigate programmatically
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const productId = queryParams.get("productId");
	useEffect(() => {
		GET_ID(`products`, productId).then((item) => setProduct(item.data));
	}, [productId]);



	useEffect(() => {
		GET_ALL(`feedbacks`).then((item) => setfeedback(item.data));
	}, []);

	const filteredFeedBack = feedbacks.filter(
		(feedback) => feedback.product.id === product.id
	);

	function addtocart2() {
		alert("add thanh cong")
	}

	function addtocart() {
		let a = product.image
		var x = document.getElementById("quality");
		let u = parseInt(x.value);
		if (cartItems != null) {
			var bool = true;
			cartItems.forEach(item => {
				if (item.productId == product.id && item.size==selectedSize) {
					item.quality += u;
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
					window.location.href = "/shopping-cart";
					bool = false;
				}
			});
			if (bool == true) {
				let newItem = {
					productId: product.id,
					name: product.name,
					price: product.discount,
					image: a,
					quality: u,
					cart: { id: null },
					size:selectedSize
				};
				cartItems.push(newItem);
				localStorage.setItem('cartItems', JSON.stringify(cartItems));
				window.location.href = "/shopping-cart";
			}
		}
	}


	const [inputValue, setInputValue] = useState(1);
	// Function to handle input changes
	const handleInputChange = (e) => {
		const value = e.target.value;
		if (Number.isInteger(parseInt(value, 10)) && parseInt(value, 10) > 0 && parseInt(value, 10) <= product.quality) {
			setInputValue(e.target.value);
		}
	};
	// Use the input value in your component logic
	const handleClick = () => {
		const myValue = inputValue; // Assign the input value to a constant
		// Use the constant 'myValue' as needed
		return myValue
	};


	////add fulltime


	let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	let login = JSON.parse(localStorage.getItem('Login'));
	let user = JSON.parse(localStorage.getItem('Account'));

	const handleAddToCart = async () => {
		if (login === 0) {
			addtocart()
			return;
		}
		const handleUpdateQuantity = async (productId, newQuantity, cartId) => {
			try {
				console.log("CartID HERE", cartId)
				if (!cartId) {
					console.error('Cart ID not found for product ID:', productId);
					return;
				}
				console.log(`Updating quality for productId ${productId} in cartId ${cartId} with quality ${newQuantity}`);

				const response = await axios.put(`http://localhost:8080/api/cartItems/${cartId}/${productId}`, { quality: newQuantity });

				if (response.status === 200) {
					console.log('Successfully updated cart item quality.');

				} else {
					console.error('Failed to update cart item quality:', response);
				}
			} catch (error) {
				console.error('Failed to update cart item quality:', error);
			}
		};

		try {
			let cartId;
			const cartResponse = await axios.get(`http://localhost:8080/api/carts/user/${user.id}`);
			if (cartResponse.data.length > 0) {
				cartId = cartResponse.data[0].id;
			}


			
			const existingCartItem = cartItems.find(cartItem => cartItem.productId === product.id && cartItem.size === selectedSize);

			if (existingCartItem) {
				console.log("Trung")
				const existingIntQuality = parseInt(existingCartItem.quality, 10);
				const inputIntValue = parseInt(inputValue, 10);
				const sum = existingIntQuality + inputIntValue;
				await handleUpdateQuantity(product.id, sum, cartId);
			} else {
				const cartItems = {
					productId: product.id,
					name: product.name,
					image: product.image,
					price: product.discount,
					quality: inputValue,// Ensure to include quality
					cart: { id: cartId },
					size:selectedSize
				};
				console.log('cartItems:', cartItems);

				const response = await axios.post('http://localhost:8080/api/cartItems', cartItems);
				console.log('New Cart Item Response dssdf:', response.data);

				if (response.data && response.data.id) {
					// Assume the response data structure contains ids of product and cart
					const newCartItem = {
						...response.data,
						product: { id: product.id }, // Manually link the product id
						cart: { id: cartId },// Manually link the cart id
					};
					let cartItems1 = JSON.parse(localStorage.getItem('cartItems')) || [];
					localStorage.setItem("cartItems", JSON.stringify([...cartItems1, newCartItem]));
				} else {
					console.error('Error in response data dsfsdf:', response.data);
				}
			}

			setInputValue(1);
			/////
			let a = product.image
			let u = parseInt(inputValue, 10);
			if (cartItems != null) {
				var bool = true;
				cartItems.forEach(item => {
					if (item.productId == product.id && item.size ===selectedSize) {
						item.quality += u;
						localStorage.setItem('cartItems', JSON.stringify(cartItems));
						window.location.href = "/shopping-cart";
						bool = false;
					}
				});
				if (bool == true) {
					let newItem = {
						productId: product.id,
						name: product.name,
						price: product.discount,
						image: a,
						quality: u,
						size:selectedSize
					};
					cartItems.push(newItem);
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
					window.location.href = "/shopping-cart";
				}
			}
			window.location.href = "/shopping-cart";
		} catch (error) {
			console.error('Error adding product to cart:', error);
		}
	};

	/////Add feedbacks

	const addfeedback = async () => {
		var x = document.getElementById("feedbacks");
		if (login === 0) {
			console.log(x.value)
			alert("Vui lòng đăng nhập để sử dụng tính năng")
			window.location.href = "/login";
			return;
		}
		else {
			const requestData = {
				created_at: new Date().toISOString(),
				email: user.email,
				note: "note",
				phone_number: user.phonenumber,
				status: 1,
				content: x.value,
				fullname: user.name,
				product: {
					id: product.id
				},
			};
			console.log(requestData)
			POST_ADD(`feedbacks`, requestData)
			window.location.reload();
		}

	};

	/////

	function formatPrice(priceInXu) {
		const dong = priceInXu; // Assuming 1 dong = 100 xu
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
	}
	return (
		<section>
			<section class="py-3 bg-light">
				<div class="container">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a>Home</a>
						</li>
						<li class="breadcrumb-item">
							<a>{product.category && product.category.name}</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">

							{product.name}
						</li>
					</ol>
				</div>
			</section>
			<section class="section-content bg-white padding-y">
				<div class="container">
					<div class="row">
						<aside class="col-md-6">
							<div class="card">
								<article class="gallery-wrap">
									<div class="img-big-wrap">
										<div>
											<a href="#">
												<img src={`./images/items/${product.image}`} />
											</a>
										</div>
									</div>
								</article>
							</div>
						</aside>
						<main class="col-md-6">
							<article class="product-info-aside">
								<h2 class="title mt-3">{product.name} </h2>
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
									<h2 class="title mt-3" >Gia: {formatPrice(product.discount)}

									</h2>
									<del style={{ fontSize: '1.6rem', color: '#e63b3b' }} class="text-muted">Gia goc: {formatPrice(product.price)}</del>

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
									<dt class="col-sm-3">Tồn kho</dt>
									<dd class="col-sm-9">{product.quality > 0 ? (
										<p>
											{product.quality} đôi
										</p>
									) : (
										<span className="out-of-stock">Hết hàng</span>
									)}</dd>
									<dt class="col-sm-3">Thời gian giao hàng</dt>

									<dd class="col-sm-9">3-4 tuần</dd>

									<Button class="nav-link" style={{ background: "red", maxWidth: 120, borderRadius: 80 }} onClick={addtocart2}>
										<span class="text">Thêm vào Yeu thich</span> </Button>
								</dl>
								<div>
									<h2>Chọn size sản phẩm</h2>
									<div className="d-flex flex-wrap"> {/* Add Bootstrap classes for layout */}
										{['S', 'M', 'L', 'XL'].map((size) => (
											<FormControlLabel
												key={size}
												control={
													<Checkbox
														type="checkbox"
														checked={selectedSize === size}
														value={size}
														onChange={() => setSelectedSize(size)}
														className="ms-2" // Apply Bootstrap margin-left for 20px spacing
													/>
												}
												label={size}
											/>
										))}
									</div>
									<p>Size đã chọn: {selectedSize}</p>
								</div>
								<div class="form-row mt-4">
									<div class="form-group col-md flex-grow-0">
										<div class="input-group mb-3 input-spinner">
											<div class="input-group-prepend">

												<li class="list-inline-item mr-5" >

													<div class="form-inline" >
														<label class="mr-2">So luong</label>

														<input style={{ width: "fit-content", fontSize: '1.3rem', color: '#e63b3b' }} value={inputValue} type="number" id="quality" onChange={handleInputChange}></input>


													</div>
												</li>
											</div>
										</div>
									</div>

									<div class="form-group col-md">
										<a href="#" class="btn btn-primary">
											<i class="fas fa-shopping-cart"></i>{""}
											<Button class="nav-link" onClick={handleAddToCart}>
												<span class="text">Thêm vào giỏ hàng</span> </Button>

										</a>

										<a href="#" class="btn btn-light" >
											<i class="fas fa-envelope"></i>{" "}
											<span class="text">Liên hệ với nhà cung cấp</span>
										</a>
									</div>
								</div>

								<h4 class="title mt-3" style={{ color: "red" }}>Tổng cộng : {formatPrice(product.discount * handleClick())}</h4>
							</article>
						</main>
						<div class="col">
						<h2>Đánh giá</h2>
						<div class="comments" style={{ border: "2px solid ", width: "600px" }}>
							<ul class="comments-list"  >
								{filteredFeedBack.length > 0 && (
									<>
										{filteredFeedBack.map((row) => (

											<li class="comment" key={row.id} style={{ paddingTop: 10 }}>
												<div class="comment-header">

													<div class="comment-info">
														<span class="comment-author">{row.fullname} </span>
														<span class="comment-date">{row.created_at}</span>
													</div>
												</div>
												<div class="comment-content">
													{row.content}
												</div>

											</li>

										))}
									</>
								)}
								<div class="comment-add" style={{ paddingTop: 20 }}>

									<div class="comment-input">
										<textarea name="comment" id="feedbacks" placeholder="Viết bình luận của bạn..."></textarea>
									</div>
									<button onClick={() => {
										addfeedback()
									}}>Gửi</button>

								</div>
							</ul>
						</div>
						</div>
						
					</div>
				</div>
			</section>
			<section class="section-name padding-y bg">

			</section>
		</section>
	);
};
export default Section1;
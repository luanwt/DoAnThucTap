
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Button } from "react-bootstrap";
import axios from "axios";
import { DELETE_ID, GET_ID, PUT_EDIT } from "../../api/apiService";

// const storedUserInfo = localStorage.getItem('Account');
// const retrievedUserInfo = JSON.parse(storedUserInfo);

const CTShoppingC = () => {

	// const [orders, setorders] = useState([]);
	// const [user_id, setuserid] = useState();
	// const [order_id, setorder_id] = useState();
	// const [email, setEmail] = useState("");
	// const [fullname, setfullname] = useState("");
	// const [address, setaddress] = useState("");
	// const [phone_number, setphone_number] = useState("");

	const [totalPrice, settotalprice] = useState(0);
	let login = localStorage.getItem('Login')
	const [note, setnote] = useState("không giảm giá");
	let cartId = JSON.parse(localStorage.getItem('CartId')) || [];
	// useEffect(() => {
	// 	const fetchOrders = async () => {
	// 	  try {
	// 		const response = await axios.get('http://localhost:8080/api/orders'); // Replace with your API endpoint
	// 		setorders(response.data);
	// 	  } catch (error) {
	// 		console.error('Failed to retrieve orders:', error);
	// 	  }
	// 	};

	// 	fetchOrders();
	//   }, []);

	//Xuli TotalPrice//
	let tam = 0
	function UpdateTotalPrice(a) {
		tam += a;
		settotalprice(tam)
	}
	//Update Orders
	async function updateOrder(requestData) {
		const response = await axios.post('http://localhost:8080/api/orders', requestData);
		console.log('Yêu cầu thành công:', response.data);
	}
	async function updateall(requestData) {

		try {
			await updateOrder(requestData);
			alert('Đơn hàng 1 đã cập nhật thành công!');
			await updateOrderdetail();
			alert('chi tiet Đơn hàng đã cập nhật thành công!');
		} catch (error) {
			console.error('Yêu cầu thất bại:', error);
		}
		alert('Đã thanh toán thành công');
		window.location.href = "/shopping-cart";

	}
	//updateOrderDetail when buy all Item
	let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	async function updateOrderdetail() {
		const response = await axios.get('http://localhost:8080/api/orders');
		if (cartItems != null) {
			cartItems.forEach(item => {
				var a
				var b
				try {
					a = (response.data);
					b = parseInt(a[a.length - 1].id)
					const requestData = {
						num: item.quality,
						price: item.price,
						total_money: item.price * item.quality,
						order: {
							id: b
						},
						product: {
							id: item.productId,
						},
					};
					console.log(requestData)

					updateOrderdetail2(requestData)
				} catch (error) {
					console.error('Failed to retrieve orders:', error);
				}
			})
		} else {
			alert("Cartitem dang null???")
		}
	}
	async function updateOrderdetail2(requestData) {
		const productId = requestData.product.id;
		// Assuming GET_ID returns a Promise
		const response2 = await axios.get(`http://localhost:8080/api/products/${productId}`);
		const num = response2.data.quality - requestData.num
		PUT_EDIT(`products/update/${requestData.product.id}`, { quality: num })
		delcartItems2(productId)
		const response = await axios.post('http://localhost:8080/api/orderdetails', requestData);
		console.log('Yêu cầu thành công:', response.data);
	}
	///


	function delcartItems2(productId) {
		DELETE_ID(`cartItems/${cartId}/${productId}`)
		localStorage.removeItem('cartItems');
		window.location.href = "/shopping-cart";
	}


	/////////////////////////////////////////////////
	//In ra cac san pham tron Cart
	function displayCartItems() {
		let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

		let cartContainer = document.getElementById('cart');
		if (cartItems != null) {
			// cartContainer.innerHTML = ''; // Clear previous content
			cartItems.forEach(item => {
				// alert(cartItems)
				// Create a div to display each item
				let buttonBuy = document.createElement('button');
				buttonBuy.textContent = "Thanh Toan"
				buttonBuy.style = "background-color: #FF6600; color: white; height: 40px";
				buttonBuy.style.marginLeft="20px"
				buttonBuy.style.marginTop="120px"
				buttonBuy.style.border="none"
				buttonBuy.style.borderRadius="5px"

				let buttondel = document.createElement('button');
				buttondel.textContent = "Xoa khoi gio hang"
				buttondel.style = "background-color: #FF6600; color: white; height: 40px";
				buttondel.style.marginLeft="10px"
				buttondel.style.marginTop="120px"
				buttondel.style.border="none"
				buttondel.style.borderRadius="5px"
				var d = item.productId
				buttondel.onclick = delcartItems
				buttonBuy.onclick = buyOneItem
				function delcartItems() {

					DELETE_ID(`cartItems/${cartId}/${item.productId}`)
					let temp = cartItems.filter(item => item.productId !== d);
					localStorage.setItem("cartItems", JSON.stringify(temp))
					window.location.href = "/shopping-cart";
				}

				async function buyOneItem() {
					if (login != 1) {
						alert("Vui lòng đăng nhập để sử dụng chức năng này");
						window.location.href = "/Login";
					} else {
						//update Order table
						const storedUserInfo = localStorage.getItem('Account');
						const retrievedUserInfo = JSON.parse(storedUserInfo);
						const requestData = {
							email: retrievedUserInfo.email,
							fullname: retrievedUserInfo.name,
							address: retrievedUserInfo.address,
							order_data: new Date().toISOString(),
							note: note,
							phone_number: retrievedUserInfo.phonenumber,
							total_money: item.price,
							user: {
								id: retrievedUserInfo.id,
							},
						};

						try {
							await updateOrder(requestData);
							alert('Đơn hàng 1 đã cập nhật thành công!');
							await updateOrderdetail();
							await delcartItems()
						} catch (error) {
							console.error('Yêu cầu thất bại:', error);
						}

						const temp = cartItems.filter(item => item.productId !== d);
						localStorage.setItem("cartItems", JSON.stringify(temp));
						alert('Đã thanh toán thành công');
					}
				}




				//Update Order when buy 1 Item
				async function updateOrder(requestData) {
					const response = await axios.post('http://localhost:8080/api/orders', requestData);
					console.log('Yêu cầu thành công:', response.data);
					localStorage.setItem("orders", JSON.stringify(item));
				}
				/////

				//updateOrderDetail when buy 1 Item
				async function updateOrderdetail() {
					var a
					var b
					try {
						const response = await axios.get('http://localhost:8080/api/orders');
						a = (response.data);
						b = parseInt(a[a.length - 1].id)
						alert(item.productId)
						const requestData = {
							num: item.quality,
							price: item.price,
							total_money: item.price * item.quality,
							order: {
								id: b
							},
							product: {
								id: item.productId,
							},
						};
						updateOrderdetail1(requestData)
						console.log(requestData)
					} catch (error) {
						console.error('Failed to retrieve orders:', error);
					}
					window.location.href = "/shopping-cart";
				}

				async function updateOrderdetail1(requestData) {
					const productId = requestData.product.id;
					// Assuming GET_ID returns a Promise
					const response2 = await axios.get(`http://localhost:8080/api/products/${productId}`);
					const num = response2.data.quality - requestData.num
					PUT_EDIT(`products/update/${requestData.product.id}`, { quality: num })
					const response = await axios.post('http://localhost:8080/api/orderdetails', requestData);
					console.log('Yêu cầu thành công:', response.data);
				}

				////////
			
				
				let itemDiv = document.createElement('h4');
				itemDiv.style.color = '#FF0000';
				itemDiv.textContent = `${item.name} `;
				let price = document.createElement('h6');
				price.style.paddingLeft="20px"
				price.style.marginTop="120px"
				let price2 = item.quality * item.price 
				// totalPrice+=item.quality*item.price;
				UpdateTotalPrice(item.quality * item.price)

				price.textContent = `Tong cong: ${formatPrice(price2/1000)}`;
				const image = document.createElement("img");
				let itemDiv1 = document.createElement('div');
		
		
				itemDiv1.textContent = `So luong: ${item.quality} `;
				image.height = 240
				image.width = 240
				image.addEventListener('click', () => {
					window.location.href = `/detailproduct?productId=${item.productId}`;
				});
				itemDiv1.style.marginLeft="20px"
				itemDiv1.style.marginTop="120px"
				let a = item.image
				image.src = `./images/items/${a}`;
		

				const itemDetails = document.createElement('div');
				itemDetails.style.display="flex"
					
						
			
			
				itemDetails.appendChild(itemDiv);
				itemDetails.appendChild(image);
		
				cartContainer.appendChild(itemDetails);
			
				itemDetails.appendChild(itemDiv1);
				itemDetails.appendChild(price);
				itemDetails.appendChild(buttonBuy);
				itemDetails.appendChild(buttondel);
		
			
			});
		}
	}

	function formatPrice(priceInXu) {
        const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
    }
	return (
		<>
			<section class="section-content padding-y">
				<div class="container">
					<div class="row">
						<main class="col-md-9">
							<div class="card"  >
								<div>
									<div class="show cartitem">

										{/* {setTimeout(() => {
											displayCartItems();
										}, 100)} */}
										
											
											
											
										
										{/* {window.onload = displayCartItems} */}
									</div>
								</div>
								<table class="table table-borderless table-shopping-cart">
									<thead class="text-muted">

									</thead>
									<tbody >
									
										<div >
											<div id="cart"  className="row-md-4">
											{cartItems.length > 0 ? window.onload = displayCartItems : (
													<h4 style={{color:"#FF6666"}}>GIỎ HÀNG HIỆN TẠI ĐANG TRỐNG</h4>
												)}
											</div>
											</div>
										
								
									</tbody>
								</table>

								<div class="card-body border-top ">

									<Link classNameName="nav-link" to="/Home"><small class="text"> Tiếp tục mua sắm </small></Link>
								</div>
							</div>

							<div class="alert alert-success mt-3">
								<p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
							</div>
						</main>
						<aside class="col-md-3">
							<div class="card mb-3">
								<div class="card-body">
									<form>
										<div class="form-group">
											<label>Có mã giảm giá?</label>
											<div class="input-group">
												<input type="text" id="magiamgia" class="form-control" name="" placeholder="Mã giảm giá" />
												<span class="input-group-append">
													<Button class='form-control'
														onClick={() => {

															var x = document.getElementById("magiamgia");
															var y = document.getElementById("giamgia");
															var z = document.getElementById("total");
															if (x.value === "Luan1123") {
																alert("Sử dụng mã giảm giá thành công")
																setnote("có giảm giá")
																y.value = 100000;
																y.textContent =formatPrice(y.value/1000) 
																z.value = (totalPrice - y.value)/1000;
																z.textContent = formatPrice(z.value)
															}
														}}>Xác Nhận
													</Button>
												</span>

											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<dl class="dlist-align">
										<dt>Total price:</dt>
										<dd class="text-right"> {formatPrice(totalPrice/1000)} </dd>
									</dl>

									<dl class="dlist-align">
										<dt>Discount:</dt>
										<dd class="text-right " id="giamgia" value="0"></dd>
									</dl>
									<dl class="dlist-align">
										<dt>Total:</dt>
										<dd class="text-right  h5" id="total" ><strong>{formatPrice(totalPrice/1000)}</strong></dd>
									</dl>
									<dl>
										<Button class="dlist-align" onClick={() => {
											if (cartItems.length == 0) {
												alert("Giỏ hàng đang trống vui lòng thêm sản phẩm vào")
												window.location.href = "/home";
											}
											else {
												const storedUserInfo = localStorage.getItem('Account');
												const cartId = localStorage.getItem('CartId');
												if (storedUserInfo !== null) {
													// var z = document.getElementById("total");
													// alert(totalPrice)

													const retrievedUserInfo = JSON.parse(storedUserInfo);
													const requestData = {
														// Top-level data properties
														email: retrievedUserInfo.email,
														fullname: retrievedUserInfo.name,
														address: retrievedUserInfo.address,
														order_data: new Date().toISOString(),
														note: note,
														phone_number: retrievedUserInfo.phonenumber,
														total_money: totalPrice,
														user: {
															id: retrievedUserInfo.id,
														}
													};
													DELETE_ID(`cart/${cartId}`)
													updateall(requestData)
													localStorage.removeItem('cartItems');

												}
												else {
													alert("Vui lòng đăng nhập để có thể thanh toán")
													window.location.href = "/login";
												}
											}

										}}> Mua Hàng <i class="fa fa-chevron-right"></i> </Button>
									</dl>
									<hr />
									<p class="text-center mb-4">
										<img src="images/misc/payments.png" height="26" />
									</p>

								</div><Button onClick={() => {
								}}> get last order
								</Button>
							</div>
							<h1>{cartItems.size}</h1>
						</aside>
					</div>

				</div>
			</section>
		</>
	);
}
export default CTShoppingC
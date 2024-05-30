
import { Link, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { GET_ALL, GET_ID, GET_LATEST } from "../../api/apiService";
import Section1 from "../detailProduct/Section1";
import { removeData } from "jquery";
import { Button } from "react-bootstrap";
import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
const storedUserInfo = localStorage.getItem('Account');
const retrievedUserInfo = JSON.parse(storedUserInfo);

/////PAYPAL////////////
// This value is from the props in the UI
const style = { "layout": "vertical" };

function createOrder() {
	// replace this url with your server
	return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// use the "body" param to optionally pass additional order information
		// like product ids and quantities
		body: JSON.stringify({
			cart: [
				{
					sku: "1blwyeo8",
					quantity: 2,
				},
			],
		}),
	})
		.then((response) => response.json())
		.then((order) => {
			// Your code here after create the order
			return order.id;
		});
}
function onApprove(data) {
	// replace this url with your server
	return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			orderID: data.orderID,
		}),
	})
		.then((response) => response.json())
		.then((orderData) => {
			// Your code here after capture the order
		});
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
	const [{ isPending }] = usePayPalScriptReducer();

	return (
		<>
			{(showSpinner && isPending) && <div className="spinner" />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[style]}
				fundingSource={undefined}
				createOrder={createOrder}
				onApprove={onApprove}
			/>
		</>
	);
}

/////ENDPAYPAL///////


const CTShoppingC = () => {


	const [orders, setorders] = useState([]);
	const [user_id, setuserid] = useState();
	const [order_id, setorder_id] = useState();
	const [email, setEmail] = useState("");
	const [fullname, setfullname] = useState("");
	const [address, setaddress] = useState("");
	const [phone_number, setphone_number] = useState("");
	const [totalPrice, settotalprice] = useState(0);
	let login = localStorage.getItem('Login')


	useEffect(() => {
		GET_ALL(`orders`).then((item) => setorders(item.data));
	}, [orders]);


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
		if (login != 1) {
			alert("Vui lòng đăng nhập để sử dụng chức năng này");
			window.location.href = "/Login";
		} else {
			//update Order table
			try {
				await updateOrder(requestData);
				alert('Đơn hàng 1 đã cập nhật thành công!');
				await updateOrderdetail();
			} catch (error) {
				console.error('Yêu cầu thất bại:', error);
			}
			alert('Đã thanh toán thành công');
		}
	}
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
						num: item.qual,
						price: item.price,
						total_money: item.price * item.qual,
						order: {
							id: b
						},
						product: {
							id: item.id,
						},
					};
					updateOrderdetail1(requestData)
				} catch (error) {
					console.error('Failed to retrieve orders:', error);
				}
			})
		} else {
			alert("Cartitem dang null???")
		}

		window.location.href = "/shopping-cart";
	}
	async function updateOrderdetail1(requestData) {
		const response = await axios.post('http://localhost:8080/api/orderdetails', requestData);
		console.log('Yêu cầu thành công:', response.data);
	}

	var u = true;
	const [product, setProduct] = useState({});


	// let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	// let a=localStorage.getItem('cartItems')
	// alert(a)

	//In ra cac san pham tron Cart
	function displayCartItems() {

		let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
		let cartContainer = document.getElementById('cart');
		if (cartItems != null) {
			// cartContainer.innerHTML = ''; // Clear previous content

			cartItems.forEach(item => {

				// alert(cartItems)
				let td = document.createElement('td');
				td.className = "itemside"
				let b = item.name
				// Create a div to display each item
				let buttonBuy = document.createElement('button');
				buttonBuy.textContent = "Thanh Toan"
				buttonBuy.style = "background-color: #FF6600; color: white;"

				let buttondel = document.createElement('button');
				buttondel.textContent = "Xoa khoi gio hang"
				buttondel.style = "background-color: #FF6600; color: white; paddingLeft:12"
				var d = item.id
				buttondel.onclick = delcartItems
				buttonBuy.onclick = delcartItems1

				function delcartItems() {

					let temp = cartItems.filter(item => item.id != d);
					localStorage.setItem("cartItems", JSON.stringify(temp))
					window.location.href = "/shopping-cart";
				}
				async function delcartItems1() {
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
						} catch (error) {
							console.error('Yêu cầu thất bại:', error);
						}

						const temp = cartItems.filter(item => item.id !== d);
						localStorage.setItem("cartItems", JSON.stringify(temp));
						alert('Đã thanh toán thành công');
					}
				}

				async function updateOrder(requestData) {
					const response = await axios.post('http://localhost:8080/api/orders', requestData);
					console.log('Yêu cầu thành công:', response.data);
					localStorage.setItem("orders", JSON.stringify(item));
				}
				async function updateOrderdetail() {
					var a
					var b
					try {
						const response = await axios.get('http://localhost:8080/api/orders');
						a = (response.data);
						b = parseInt(a[a.length - 1].id)
						const requestData = {
							num: item.qual,
							price: item.price,
							total_money: item.price * item.qual,
							order: {
								id: b
							},
							product: {
								id: item.id,
							},
						};
						updateOrderdetail1(requestData)
					} catch (error) {
						console.error('Failed to retrieve orders:', error);
					}
					window.location.href = "/shopping-cart";
				}
				async function updateOrderdetail1(requestData) {
					const response = await axios.post('http://localhost:8080/api/orderdetails', requestData);
					console.log('Yêu cầu thành công:', response.data);
				}
				let itemDiv = document.createElement('div');
				itemDiv.textContent = `${item.name} `;
				let price = document.createElement('div');

				let price2 = item.qual * item.price / 1000;
				// totalPrice+=item.qual*item.price;
				UpdateTotalPrice(item.qual * item.price)

				price.textContent = `Tong cong: ${price2}K vnd `;
				const image = document.createElement("img");
				let itemDiv1 = document.createElement('div');
				itemDiv1.textContent = `So luong: ${item.qual} `;
				image.height = 240
				image.width = 240
				image.addEventListener('click', () => {
					window.location.href = `/detailproduct?productId=${item.id}`;
				});

				let a = item.image
				image.src = `./images/items/${a}`;
				cartContainer.appendChild(td);
				cartContainer.appendChild(itemDiv);
				cartContainer.appendChild(image)
				cartContainer.appendChild(itemDiv1);
				cartContainer.appendChild(price);
				cartContainer.appendChild(buttonBuy);
				cartContainer.appendChild(buttondel);

			});
		}

	}
	// useEffect(() => {
	// 	if(lastname!=null){
	// 		GET_ID(`products`, lastname).then((item) => setProduct(item.data));
	// 	}
	// }, [lastname]);
	return (
		<>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<main className="col-md-9">
							<div className="card"  >
								<div>
									<div className="show cartitem">

										{/* {setTimeout(() => {
											displayCartItems();
										}, 100)} */}
										{window.onload = displayCartItems}
									</div>
								</div>
								<table className="table table-borderless table-shopping-cart">
									<thead className="text-muted">

									</thead>
									<tbody >
										<tr className="col" >
											<td id="cart">

											</td>
										</tr>
									</tbody>
								</table>

								<div className="card-body border-top ">

									<Link classNameName="nav-link" to="/Home"><small className="text"> Tiếp tục mua sắm </small></Link>
								</div>
							</div>

							<div className="alert alert-success mt-3">
								<p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
							</div>
						</main>
						<aside className="col-md-3">
							<div className="card mb-3">
								<div className="card-body">
									<form>
										<div className="form-group">
											<label>Có mã giảm giá?</label>
											<div className="input-group">
												<input type="text" id="magiamgia" className="form-control" name="" placeholder="Mã giảm giá" />
												<span className="input-group-append">
													<Button className='form-control'
														onClick={() => {
															var x = document.getElementById("magiamgia");
															var y = document.getElementById("giamgia");
															var z = document.getElementById("total");
															if (x.value === "Luan1123") {
																alert("true")
																y.value = 100000;
																y.textContent = y.value + " vnd"
																z.value = totalPrice - y.value;
																z.textContent = z.value + " vnd"
															}
														}}>Xác Nhận
													</Button>
												</span>

											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<dl className="dlist-align">
										<dt>Total price:</dt>
										<dd className="text-right"> {totalPrice} vnd</dd>
									</dl>

									<dl className="dlist-align">
										<dt>Discount:</dt>
										<dd className="text-right " id="giamgia" value="0"></dd>
									</dl>
									<dl className="dlist-align">
										<dt>Total:</dt>
										<dd className="text-right  h5" id="total" ><strong>{totalPrice}</strong></dd>
									</dl>
									<dl>
										<Button className="dlist-align" onClick={() => {

											const storedUserInfo = localStorage.getItem('Account');
											var z = document.getElementById("total");
											localStorage.removeItem('cartItems');
											const retrievedUserInfo = JSON.parse(storedUserInfo);
											const requestData = {
												// Top-level data properties
												email: retrievedUserInfo.email,
												fullname: retrievedUserInfo.name,
												address: retrievedUserInfo.address,
												order_data: new Date().toISOString(),
												phone_number: retrievedUserInfo.phonenumber,
												total_money: z.value,
												user: {
													id: retrievedUserInfo.id,
												}
											};
											updateall(requestData)
										}}> Mua Hàng <i className="fa fa-chevron-right"></i> </Button>
									</dl>
									<hr />
									<p className="text-center mb-4">
										<img src="images/misc/payments.png" height="26" />
									</p>

								</div><Button onClick={() => {
								}}> get last order
								</Button>
							</div>
						</aside>
					</div>
					<div style={{ maxWidth: "750px", minHeight: "200px" }}>
						<PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
							<ButtonWrapper showSpinner={false} />
						</PayPalScriptProvider>
					</div>
					
				</div>
			</section>
		</>
	);
}
export default CTShoppingC
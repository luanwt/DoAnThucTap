/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { DELETE_ALL, POST_ADD } from "../../api/apiService";



const MenuProflie = () => {

	// useEffect(() => {
	// 	DELETE_ALL(`cartItems/cart/${CartId}`)
	// }, []);
	const accessToken = localStorage.getItem("accessToken");
	console.log(accessToken)

	window.fbAsyncInit = function () {
		window.FB.init({
			appId: '361745122984111',
			cookie: true,
			xfbml: true,
			version: 'v15.0'
		});

		window.FB.AppEvents.logPageView();
	};

	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) { return; }
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	const handleLogout = () => {

		if (accessToken) {
			window.FB.logout(() => {
				localStorage.removeItem("accessToken");

			}, { accessToken: accessToken });
		}
	}

	///Update Cart to database
	async function clearCart() {
		DELETE_ALL(`cartItems/cart/${CartId}`)
	}
	const CartId = JSON.parse(localStorage.getItem('CartId')) || [];
	let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	async function updateCartInDatabase2(cartItems) {
		 cartItems.map(item => {
			if (item.id) {
				// Update existing item
				const requestData = {
					productId: item.productId,
					name: item.name,
					price: item.price,
					image: item.image,
					quality: item.quality,
					cart: {
						id: CartId
					}
				};
				try {
					// const response0 = await axios.delete(`/api/cartItems/cart/${CartId}`);
					POST_ADD(`cartItems`, requestData)
					console.log('Cart updated successfully in database.');
				} catch (error) {
					console.error('Error updating cart in database:', error);
				}
			} else {
				// Add new item
				const requestData = {
					// Add new item properties
					productId: item.productId,
					name: item.name,
					price: item.price,
					image: item.image,
					quality: item.quality,
					cart: {
						id: CartId
					}
					// ...
				};
				try {
					// const response0 = await axios.delete(`/api/cartItems/cart/${CartId}`);
					POST_ADD(`cartItems`, requestData)
					console.log('Cart updated successfully in database.');
				} catch (error) {
					console.error('Error updating cart in database:', error);
				}
			}


		});

	}
	async function updateCartInDatabase(cartItems) {
		// Prepare cart update data
		try {
			await clearCart();
			await updateCartInDatabase2(cartItems);
		} catch (error) {
			console.error('Yêu cầu thất bại:', error);
		}


		// 4. Send API request to update cart:

	}
	/// End Update Cart to database
	return (
		<>
			<nav class="list-group">
				<Link class="nav-link" to="/profile"><a class="list-group-item active" > Tổng quan </a></Link>
				<Link class="nav-link" to="/profile-address"><a class="list-group-item">Địa chỉ </a></Link>
				<Link class="nav-link" to="/profile-orders"><a class="list-group-item"> Đơn hàng </a></Link>
				<Link class="nav-link" to="/profile-wishlist"><a class="list-group-item"> Danh sách yêu thích </a></Link>
				<Link class="nav-link" to="/profile-setting"><a class="list-group-item"> Cài đặt </a></Link>

				<Link class="nav-link" onClick={(e) => {
					e.preventDefault();
					handleLogout();
					localStorage.removeItem("Account");
					localStorage.removeItem("accessToken");
					localStorage.removeItem('cartItems');
					clearCart();
					updateCartInDatabase(cartItems);
					window.location.href = "/login";
				}}> <a>Đăng xuất</a></Link>
				{/* <button onClick={handleLogout}>Logout</button> */}

			</nav>
		</>
	)
};
export default MenuProflie
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { DELETE_ALL, DELETE_ID, POST_ADD } from "../../api/apiService";



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
					// localStorage.removeItem("accessToken");
					localStorage.removeItem('cartItems');
					localStorage.removeItem('CartId');
					window.location.href = "/Login";
				}}> <a>Đăng xuất</a></Link>
				{/* <button onClick={handleLogout}>Logout</button> */}

			</nav>
		</>
	)
};
export default MenuProflie
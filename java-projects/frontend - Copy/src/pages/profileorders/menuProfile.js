/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';



const MenuProflie = () => {

	
	return (
		<>
			<nav class="list-group">
				<Link className="nav-link" to="/profile"><a class="list-group-item active" > Tổng quan </a></Link>
				<Link className="nav-link" to="/profile-address"><a class="list-group-item">Địa chỉ </a></Link>
				<Link className="nav-link" to="/profile-orders"><a class="list-group-item"> Đơn hàng </a></Link>
				<Link className="nav-link" to="/profile-wishlist"><a class="list-group-item"> Danh sách yêu thích </a></Link>
				<Link className="nav-link" to="/profile-setting"><a class="list-group-item"> Cài đặt </a></Link>
				
				<Link className="nav-link" onClick={() => {
					localStorage.removeItem("Account");
					window.location.href="/Login";
					localStorage.removeItem('cartItems');
				}}> <a>Đăng xuất</a></Link>
				
			</nav>
		</>
	)
};
export default MenuProflie
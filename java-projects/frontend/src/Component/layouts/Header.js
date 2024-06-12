import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL } from '../../api/apiService';
import imglogo from '../../assets/images/avatars/Logo2.jpg'
import imglogo2 from '../../assets/images/avatars/logo3.jpg'
// import SearchComponent from '../Seach/Search';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

import SearchComponent from '../../pages/Search/Search';
window.addEventListener("load", () => {
	clock();
	function clock() {
		const today = new Date();

		// get time components
		const hours = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();

		//add '0' to hour, minute & second when they are less 10
		const hour = hours < 10 ? "0" + hours : hours;
		const minute = minutes < 10 ? "0" + minutes : minutes;
		const second = seconds < 10 ? "0" + seconds : seconds;

		//make clock a 12-hour time clock
		const hourTime = hour > 12 ? hour - 12 : hour;

		// if (hour === 0) {
		//   hour = 12;
		// }
		//assigning 'am' or 'pm' to indicate time of the day
		const ampm = hour < 12 ? "AM" : "PM";

		// get date components
		const month = today.getMonth();
		const year = today.getFullYear();
		const day = today.getDate();

		//declaring a list of all months in  a year
		const monthList = [
			"Tháng 1",
			"Tháng 2",
			"Tháng 3",
			"Tháng 4",
			"Tháng 5",
			"Tháng 6",
			"Tháng 7",
			"Tháng 8",
			"Tháng 9",
			"Tháng 10",
			"Tháng 11",
			"Tháng 12"
		];

		//get current date and time
		const date = "Ngày " + day + " " + monthList[month] + " " + "Năm" + " " + year;
		const time = hourTime + ":" + minute + ":" + second + ampm;

		//combine current date and time
		const dateTime = date + " - " + time;

		//print current date and time to the DOM
		document.getElementById("date-time").innerHTML = dateTime;
		setTimeout(clock, 1000);
	
	}
	<div id="clock">
		<h3 id="date-time"></h3>
	</div>
});	

function Header({cartItemCount}) {
	/////////////////////
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleSearchChange = async (event) => {
		const input = event.target.value;
		setSearchQuery(input);
			if (!input.trim()) {
				setSearchResults([]);
				setDropdownOpen(false);
			} else {
				const productResponse = await axios.get(`http://localhost:8080/api/products`);
				const products = productResponse.data || [];
				
				setSearchResults(products.filter((item) =>
					item.name?.toLowerCase().includes(input.toLowerCase())
				));
				setDropdownOpen(true);			
			}	
	};

	const  storedUserInfo  = JSON.parse(localStorage.getItem('Account'));
	/////////////////
	let login=localStorage.getItem('Login')
		if(storedUserInfo==null || storedUserInfo =="[]" ){
			localStorage.setItem('Login',0)
		}
		else{
			localStorage.setItem('Login',1)
		}
		function toCart(){
			window.location.href = "/shopping-cart";
		}
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		GET_ALL(`categories`).then((item) => setCategories(item.data));
	}, []);
	const filteredCategories = categories.filter(
		(category) => category.isHome === 1
	  );

	
	return (
		<>		<header class="section-header">
			<section class="header-main border-bottom bg-danger"  >
				<div class="container"  >
					<div class="row align-items-center " >
						<div class="col-xl-2 col-lg-3 col-md-10" >
							<a href="http://localhost:3000/home"  >
							<img class="logo" height="100px" width="120px" style={{borderRadius:30}} src={imglogo2} alt="Brand Logo" />
							</a>
							
						</div>
					
						<div class="col-xl-6 col-lg-5 col-md-6">
							<form action="#" class="search-header" >
								<div class="input-group w-100">
									<SearchComponent
								searchQuery={searchQuery}
								handleSearchChange={handleSearchChange}
								searchResults={searchResults}
								isDropdownOpen={isDropdownOpen}
								
							/>
								</div>
							</form>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="widgets-wrap float-md-right">
								<div class="widget-header mr-3">
									<a href="#" class="widget-view">
										<div class="icon-area">
											<i class="fa fa-user" ></i>
											<span class="notify" ></span>
										</div>
										
										<Link class="nav-link"
											onClick={() => {
												if (storedUserInfo =="[]" ||storedUserInfo==null ) {
													alert("Vui long dang nhap");
													window.location.href = "/Login";
												}
												else {
													
													window.location.href = "/profile";
												}
											}}>{storedUserInfo?(<small>{storedUserInfo.name}</small>):(<small>Tài khoản</small>)}
											
												</Link>
									</a>
								</div>
								<div class="widget-header mr-3">
									<a href="#" class="widget-view">
										<div class="icon-area">
										<i class="fas fa-comment-dots"></i>
											<span class="notify"></span>
										</div>
										<Link class="nav-link"
											onClick={() => {
												
													window.location.href = "/";
										
											}}><small>Thong Bao</small></Link>
									</a>
								</div>
								

								<div class="widget-header">
									<a href="#" class="widget-view">
										<div class="icon-area">
											<span class="notify">{cartItemCount}</span>
											<i class="fa fa-shopping-cart"></i>
										</div>
										<Link class="nav-link" onClick={toCart}><small class="text"> Giỏ	 hàng </small></Link>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<nav class="navbar navbar-main navbar-expand-lg border-bottom bg-info" >
				<div class="container">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="main_nav">
						<ul class="navbar-nav">	
					
							<li class="nav-item">
								<a class="nav-link" href="/Home">Trang chủ</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"


									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>

									Danh sách sản phẩm

								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									{filteredCategories.length >
										0 &&
										filteredCategories.map((row) => (
											<a
												key={row.id}
												class="dropdown-item"
												href={`/list?categoryId=${row.id}`}
											>
												{row.name}
											</a>
										))}

									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="/listAP?page=1">

										Tất cả sản phẩm

									</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/News">Tin tức</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Giới thiệu</a>
							</li>

						</ul>
						<ul class="navbar-nav ml-md-auto">
							
						</ul>
					</div>
				</div>
			</nav>




			<nav class="navbar navbar-main navbar-expand-lg border-bottom">
				<div class="container">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="clock">
						<h3 id="date-time"></h3>
					</div>
					<div class="collapse navbar-collapse" id="main_nav">
						<ul class="navbar-nav ml-md-auto">
						
						
						</ul>
					</div>
				</div>
			</nav>

		</header>
		
		  </>

	)
}

export default Header
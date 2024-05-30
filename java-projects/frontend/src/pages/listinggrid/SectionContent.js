import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/apiService";


const GridContent = () => {
	const [products, setProducts] = useState([]);
	const [products2, setProducts2] = useState([]);
	const [categories, setCategories] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const numItems = 8;
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const currentPage = parseInt(queryParams.get("page")) || 1;
	let categoryId = queryParams.get("categoryId");
	const handlePageChange = (page) => {
		navigate(`/list?page=${page}&categoryId=${categoryId}`);
	};
	const handlePrevious = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};
	const handleNext = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};
	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					class={`page-item ${currentPage === i ? "active" : ""}`}
				>
					<Link
						class="page-link"
						to={`/list?page=${i}&categoryId=${categoryId}`}
						onClick={(event) => handlePageChange(i, event)}
					>
						{i}
					</Link>
				</li>
			);
		}
		return pageNumbers;
	};

	useEffect(() => {
		GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
			(response) => {
				setProducts(response.data);
				setProducts2(response.data)
				const contentRangeHeader = response.headers["content-range"];
				const totalItemsString= contentRangeHeader.match(/\/(\d+)/);
				const totalItems = parseInt(totalItemsString[1]);
				const calculatedTotalPages = Math.ceil(totalItems / numItems);
				setTotalPages(calculatedTotalPages);
			}
		);
	
		if (categoryId !== null) {
			GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
		} else {
			setCategories({ name: "Tất cả sản phẩm" });
		}
	}, [categoryId, currentPage]);

	

	const filterItem = () => {
		// Get minimum price as a number (ensure valid input)
		const minPrice = parseFloat(document.getElementById("min").value) || 0;
	  
		// Get optional maximum price as a number (handle potential errors)
		let maxPrice;
		try {
		  maxPrice = parseFloat(document.getElementById("max").value) || null;
		} catch (error) {
		  console.error("Invalid maximum price:", error);
		  maxPrice = null; // Set to null if parsing fails
		}
	  
		// Filter products based on minimum and optional maximum price
		const filteredProducts = products2.filter((product) => {
		  if (maxPrice === null) {
			// Only minimum price filter
			return product.price > minPrice;
		  } else {
			// Minimum and maximum price filter
			return product.price >= minPrice && product.price <= maxPrice;
		  }
		});
	  
		// Display filtered products (console for debugging, update UI in your framework)
		console.log(filteredProducts);
	  
		// Update UI with filtered products (framework-specific)
		// Replace with your framework's mechanism to update product state/data
		setProducts(filteredProducts);
	  };
	return (

		<section class="section-content padding-y">
			<div class="container">



				<div class="card mb-3">
					<div class="card-body">
						<div class="row">
							<div class="col-md-2">Vị trí: </div>
							<nav class="col-md-8">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="/home">Home</a></li>
									<li class="breadcrumb-item"><a>{categories.name}</a></li>
									<li class=" active" aria-current="page"></li>
								</ol>
							</nav>
						</div>
						<div class="row">
							<div class="col-md-2">Sắp xếp theo</div>
							<div class="col-md-10">
								<ul class="list-inline">
									<li class="list-inline-item mr-3 dropdown"><a href="/" class="dropdown-toggle" data-toggle="dropdown">   Kiểu nhà cung cấp  </a>
										<div class="dropdown-menu p-3" style={{ width: "400px" }}>
											<label class="form-check">
												<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp tốt
											</label>
											<label class="form-check">
												<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp rẻ
											</label>
											<label class="form-check">
												<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp mới
											</label>
										</div>
									</li>
									<li class="list-inline-item mr-3 dropdown">
										<a href="/" class="dropdown-toggle" data-toggle="dropdown">  Quốc gia </a>
										<div class="dropdown-menu p-3">
											<label class="form-check"> 	 <input type="checkbox" class="form-check-input" /> China    </label>
											<label class="form-check">   	 <input type="checkbox" class="form-check-input" /> Japan      </label>
											<label class="form-check">    <input type="checkbox" class="form-check-input" /> Uzbekistan  </label>
											<label class="form-check">  <input type="checkbox" class="form-check-input" /> Russia     </label>
										</div>
									</li>
									<li class="list-inline-item mr-3 dropdown">
										<a href="/" class="dropdown-toggle" data-toggle="dropdown">Tính năng</a>
										<div class="dropdown-menu">
											<a href="/" class="dropdown-item">Kháng khuẩn</a>
											<a href="/" class="dropdown-item">Có nút bấm</a>
											<a href="/" class="dropdown-item">An toàn tuyệt đối</a>
										</div>
									</li>
									<li class="list-inline-item mr-3"><a href="/">màu sắc</a></li>
									<li class="list-inline-item mr-3"><a href="/">kích cỡ</a></li>
									<li class="list-inline-item mr-3">
										<div class="form-inline" onChange={() => filterItem()}>
											<label class="mr-2">Giá</label>
											<input class="form-control form-control-sm" placeholder="Min" type="number" id="min" />
											<span class="px-2"> - </span>
											<input class="form-control form-control-sm" placeholder="Max" type="number" id="max" />
											<button type="submit" class="btn btn-sm btn-light ml-2">Ok</button>
										</div>
									</li>
									<li class="list-inline-item mr-3">
										<label class="custom-control mt-1 custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<div class="custom-control-label">sẵn sàng để vận chuyển 
											</div>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<header class="mb-3">
					<div class="form-inline">
						<strong class="mr-md-auto">{products.length} Items found </strong>
						<select class="mr-2 form-control">
							<option>Sản phẩm mới</option>
							<option>Sản phẩm hot</option>
							<option>Sản phẩm phổ biến</option>
							<option>Cheapest</option>
						</select>
						<div class="btn-group">
							<a href="page-listing-grid.html" class="btn btn-light active" data-toggle="tooltip" title="List view">
								<i class="fa fa-bars"></i></a>
							<a href="page-listing-large.html" class="btn btn-light" data-toggle="tooltip" title="Grid view">
								<i class="fa fa-th"></i></a>
						</div>
					</div>
				</header>

				<div class="row">
					{products.length > 0 &&
						products.map((row) => (
							<div class="col-md-3">
								<figure class="card card-product-grid">
									
									<div class="img-wrap">
										
								
										<Link to={`/detailproduct?productId=${row.id}`} class="img-wrap">
									<img src={`./images/items/${row.image}`} />{" "}
									<span class="badge badge-danger"> Mới </span>
								</Link>
									</div>
									<figcaption class="info-wrap">
										<h4 href="/" class="title mb-2">{row.name}</h4>
										<div class="price-wrap">
											<span class="price">{row.price} vnd</span>
											<small class="text-muted">/sản phẩm</small>
										</div>

										<p class="mb-2">số lượng: {row.quality}  <small class="text-muted"></small></p>
										<p class="mb-3">
											<span class="tag"> <i class="fa fa-check"></i> Đã xác minh</span>
											<span class="tag"> 2 năm </span>
											<span class="tag"> 23 lượt xem </span>
											<span class="tag"> Japan </span>
										</p>

										<label class="custom-control mb-3 custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<div class="custom-control-label">thêm vào so sánh
											</div>
										</label>

										<a href="/" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp  </a>

									</figcaption>
								</figure>
							</div>
						))}
				</div>
			<nav class="mb-4" aria-label="Page navigation sample">
				<ul class="pagination">
						<li class={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
							<a class="page-link" onClick={handlePrevious}>
								Previous
							</a>
						</li>
						{renderPageNumbers()}
						<li class={`page-item ${currentPage === totalPages ? "disabled" : ""
							}`}>
							<a class="page-link" onClick={handleNext} >
								Next
							</a>
						</li>
					</ul>
				</nav>


				<div class="box text-center">
					<p>Bạn đã tìm thấy thứ bạn cần tìm?</p>
					<a href="/" class="btn btn-light">Yes</a>
					<a href="/" class="btn btn-light">No</a>
				</div>

			</div>
		</section>
	);

};
export default GridContent
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/apiService";


const GridContent2 = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState(1);
	const [totalPages, setTotalPages] = useState();
	const numItems = 8;
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const currentPage = parseInt(queryParams.get("page")) || 1;

	let categoryId = queryParams.get("categoryId");
	const handlePageChange = (page) => {
		navigate(`/listAP?page=${page}`);
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
					className={`page-item ${currentPage === i ? "active" : ""}`}
				>
					<Link
						className="page-link"
						to={`/listAP?page=${i}`}
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
	return (

		<section className="section-content padding-y">
			<div className="container">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row">
							<div className="col-md-2"> Vị trí : </div>
							<nav className="col-md-8">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Home</a></li>
									<li className="breadcrumb-item"><a>{categories.name}</a></li>
									<li className="breadcrumb-item"><a href="/">Danh mục</a></li>
									<li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
								</ol>
							</nav>
						</div>

						<div className="row">
							<div className="col-md-2">Sắp xếp theo</div>
							<div className="col-md-10">
								<ul className="list-inline">
									<li className="list-inline-item mr-3 dropdown"><a href="/" className="dropdown-toggle" data-toggle="dropdown">   Kiểu nhà cung cấp  </a>
										<div className="dropdown-menu p-3" style={{ width: "400px" }}>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp tốt
											</label>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp rẻ
											</label>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp mới
											</label>
										</div>
									</li>
									<li className="list-inline-item mr-3 dropdown">
										{/* <a href="/" className="dropdown-toggle" data-toggle="dropdown">  Quốc gia </a>
										<div className="dropdown-menu p-3">
											<label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China    </label>
											<label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan      </label>
											<label className="form-check">    <input type="checkbox" className="form-check-input" /> Uzbekistan  </label>
											<label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia     </label>
										</div> */}
									</li>
									<li className="list-inline-item mr-3 dropdown">
										<a href="/" className="dropdown-toggle" data-toggle="dropdown">Tính năng</a>
										<div className="dropdown-menu">
											<a href="/" className="dropdown-item">Kháng khuẩn</a>
											<a href="/" className="dropdown-item">Có nút bấm</a>
											<a href="/" className="dropdown-item">An toàn tuyệt đối</a>
										</div>
									</li>
									<li className="list-inline-item mr-3"><a href="/">màu sắc</a></li>
									<li className="list-inline-item mr-3"><a href="/">kích cỡ</a></li>
									<li className="list-inline-item mr-3">
										<div className="form-inline">
											<label className="mr-2">Giá</label>
											<input className="form-control form-control-sm" placeholder="Min" type="number" />
											<span className="px-2"> - </span>
											<input className="form-control form-control-sm" placeholder="Max" type="number" />
											<button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
										</div>
									</li>
									<li className="list-inline-item mr-3">
										<label className="custom-control mt-1 custom-checkbox">
											<input type="checkbox" className="custom-control-input" />
											<div className="custom-control-label">sẵn sàng để vận chuyển 
											</div>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<header className="mb-3">
					<div className="form-inline">
						<strong className="mr-md-auto">{products.length} đã tìm thấy </strong>
						<select className="mr-2 form-control">
							<option>Sản phẩm mới</option>
							<option>Sản phẩm hot</option>
							<option>Sản phẩm phổ biến</option>
							<option>Cheapest</option>
						</select>
						<div className="btn-group">
							<a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view">
								<i className="fa fa-bars"></i></a>
							<a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
								<i className="fa fa-th"></i></a>
						</div>
					</div>
				</header>

				<div className="row">
					{products.length > 0 &&
						products.map((row) => (
							<div className="col-md-3">
								<figure className="card card-product-grid">
									<div className="img-wrap">
										
										<span className="badge badge-danger"> Mới </span>
										<Link to={`/detailproduct?productId=${row.id}`} class="img-wrap">
									<img src={`./images/items/${row.image}`} />{" "}
								</Link>
									</div>
									<figcaption className="info-wrap">
										<a href="/" className="title mb-2">{row.name}</a>
										<div className="price-wrap">
											<span className="price">{row.price}</span>
											<small className="text-muted">/sản phẩm</small>
										</div>

										<p className="mb-2">số lượng: 2   <small className="text-muted"></small></p>



										<p className="mb-3">
											<span className="tag"> <i className="fa fa-check"></i> Đã xác minh</span>
											<span className="tag"> 2 năm </span>
											<span className="tag"> 23 lượt xem </span>
											<span className="tag"> Japan </span>
										</p>

										<label className="custom-control mb-3 custom-checkbox">
											<input type="checkbox" className="custom-control-input" />
											<div className="custom-control-label">thêm vào so sánh
											</div>
										</label>

										<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Liên hệ nhà cung cấp  </a>

									</figcaption>
								</figure>
							</div>
						))}

				</div>


				<nav className="mb-4" aria-label="Page navigation sample">

				<ul className="pagination">
						<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
							<a className="page-link" onClick={handlePrevious}>
								Previous
							</a>
						</li>
						{renderPageNumbers()}
						<li className={`page-item ${currentPage === totalPages ? "disabled" : ""
							}`}>
							<a className="page-link" onClick={handleNext} >
								Next
							</a>
						</li>
					</ul>
				</nav>


				<div className="box text-center">
					<p>Bạn đã tìm thấy thứ bạn cần tìm?</p>
					<a href="/" className="btn btn-light">Yes</a>
				
					<a href="/" className="btn btn-light">No</a>
				</div>

			</div>
		</section>
	);

};
export default GridContent2
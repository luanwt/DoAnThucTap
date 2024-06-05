

import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from "react-router-dom";
const cardTextStyle = {
	maxWidth: "80%",
};
const Detail = (category) => {
	const { categoryName, categoryId } = category;
	const [products, setProducts] = useState([]);
	useEffect(() => {
	GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) =>
	setProducts(item.data)
	);
	}, [categoryId]);
	return (
		<section class="padding-bottom">
			        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h3 class="title-section text-uppercase">
					<Link to={`/list?categoryId=${categoryId}`}>
					{categoryName}
					</Link>
			
                </h3>
            </header>
            <div class="card card-home-category">
                <div class="row no-gutters">
                    <div class="col-md-3">
                     
                        <div class="home-category-banner bg-light-orange">
                            <h5 class="title">Những mẫu giày {categoryName} hot nhất  dành cho thể thao</h5>
                          
                            <a href="#" class="btn btn-outline-primary rounded-pill">Xem ngay</a>
                            <img src="~/css/images/items/2.jpg" class="img-bg"/>
                        </div>
                    </div> 
					{
					products.length > 0 && products.slice(0, 7).map((row) => (

						<div class="col-xl-3 col-lg-3 col-md-4 " key={products.id}>
						
							<div class="card card-product-grid">
								<h4 class="name h4 mt-2 text-danger">{row.name}</h4>
								<Link to={`/detailproduct?productId=${row.id}`} class="img-wrap">
									<img src={`./images/items/${row.image}`} />{" "}
								</Link>
							
								<figcaption class="info-wrap">
									<ul class="rating-stars mb-1">
										<li style={{ cardTextStyle }} class="stars-active">
											<img src={startsActive} alt="" />
										</li>
										<li>
											<img src={startsDisable} alt="" />
										</li>
									</ul>
									<div>
									
									{row.quality > 0 ? (
										<Link to={`/detailproduct?productId=${row.id}`} className="title">
											Số lượng: {row.quality}
										</Link>
										) : (
										<span className="out-of-stock">Hết hàng</span>
										)}
									</div>
									<div class="price h5 mt-2"><del>Giá gốc:{row.price} vnd</del></div>
									<div class="price h5 mt-2">Giảm còn:{row.discount} vnd</div>
								</figcaption>
							</div>
						</div>
					))}
                    <div class="col-md-9">
                        <ul class="row no-gutters bordered-cols">
                              
                        </ul>
                    </div>
                    
                        
                </div> 
            </div> 
            
        </section>
		</section>
	);
};
export default Detail;
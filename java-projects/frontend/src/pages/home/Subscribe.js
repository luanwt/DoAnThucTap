import React from "react";
import '../../assets/js/bootstrap.bundle.min.js'
const Subscribe = () => (
	<section class="section-subscribe padding-y-lg bg-danger">
		<div class="container">

			<p class="pb-2 text-center text-white">Cung cấp các xu hướng sản phẩm mới nhất và tin tức ngành trực tiếp vào hộp thư của bạn</p>

			<div class="row justify-content-md-center">
				<div class="col-lg-5 col-md-6">
					<form class="form-row">
						<div class="col-md-8 col-7">
							<input class="form-control border-0" placeholder="Email của bạn" type="email" />
						</div>
						<div class="col-md-4 col-5">
							<button type="submit" class="btn btn-block btn-info"> <i class="fa fa-envelope"></i> Gửi </button>
						</div>
					</form>
					<small class="form-text text-white-50">Chúng tôi sẽ không chia sẻ email của bạn đến bất kỳ bên thứ 3 nào</small>
				</div>
			</div>


		</div>
	</section>
);
export default Subscribe
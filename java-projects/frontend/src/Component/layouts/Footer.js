import React, {Component} from 'react'
import{ Link} from 'react-router-dom'

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( 
            <footer class="section-footer bg-secondary bg-blue">
	<div class="container">
		<section class="footer-top padding-y-lg text-white">
			<div class="row">
				<aside class="col-md col-6">
					<h6 class="title">Thương hiệu</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Adidas</a></li>
						<li> <a href="#">Puma</a></li>
						<li> <a href="#">Reebok</a></li>
						<li> <a href="#">Nike</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Thông tin</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Về Công ty</a></li>
						<li> <a href="#">Tìm chi nhánh </a></li>
						<li> <a href="#">Quy tắc và điều khoản</a></li>
						<li> <a href="#">Sơ đồ trang web</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Trợ giúp</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Liên hệ</a></li>
						<li> <a href="#">Chính sách hoàn tiền</a></li>
						<li> <a href="#">Tình trạng đơn hàng</a></li>
						<li> <a href="#">Thông tin vận chuyển</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Tài khoản</h6>
					<ul class="list-unstyled">
					<Link onClick={() => {
					// localStorage.removeItem("Account");
					localStorage.setItem("Login",0);
					
					window.location.href="/Login";
				}} 
					
					>
						<li> <a href="#"> Đăng nhập </a></li>
						</Link>
						<Link to="/register">
						<li> <a href="#"> Đăng ký</a> </li>
						</Link>
						<li> <a href="#">Cài đặt tài khoản </a></li>
						<li> <a href="#">Đơn hàng </a></li>
					</ul>
				</aside>
				<aside class="col-md">
					<h6 class="title">Youtube</h6>
					<ul class="list-unstyled">
				
						<iframe width="560" height="315" src="https://www.youtube.com/embed/z3OKd5b2Rlw" title="YouTube video player"
						 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						 allowfullscreen>
							
						 </iframe>
					</ul>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.3777212169084!2d106.7753625229773!3d10.83001
					8159018683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIEN
					hbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1706094503957!5m2!1svi!2s" width="600" height="450" 
					style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

				</aside>
			</div> 
		</section>	

		<section class="footer-bottom text-center">
		
				<p class="text-white">Chính sách bảo mật - Điều khoản sử dụng - Thông tin người dùng Hướng dẫn yêu cầu pháp lý</p>
				<p class="text-muted"> Công ty trách nhiệm hữu hạn 1 thành viên luanwt</p>
				<br/>
		</section>
	</div>
</footer>
        )
    }
}
export default Footer
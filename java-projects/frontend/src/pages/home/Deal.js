import React from "react";
import imgsp1 from '../../assets/images/items/1.jpg';
import imgsp3 from '../../assets/images/items/2.jpg';
import imgsp4 from '../../assets/images/items/3.jpg';
import imgsp5 from '../../assets/images/items/4.jpg';
import imgsp6 from '../../assets/images/items/5.jpg';


const Deal = () => (
  <section class="padding-bottom">
    <div class="card card-deal">
     <h2>Sản phẩm khuyến mãi</h2>
      <div class="row no-gutters items-wrap">
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img src={imgsp1} />
            </a>
            <div class="text-wrap p-3">
              <a href="/detailproduct" class="title">Summer clothes</a>
              <span class="badge badge-danger"> -20% <del>$1200</del></span>
            </div>
          </figure>
        </div>
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img src={imgsp3} />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Some category</a>
              <span class="badge badge-danger"> -5%<del>$1200</del> </span>
            </div>
          </figure>
        </div>
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img src={imgsp4} />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Another category</a>
              <span class="badge badge-danger"> -20% <del>$1200</del></span>
            </div>
          </figure>
        </div>
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img src={imgsp5} />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Home apparel</a>
              <span class="badge badge-danger"> -15% <del>$1200</del></span>
            </div>
          </figure>
        </div>
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img src={imgsp6} />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title text-truncate">Smart watches</a>
              <span class="badge badge-danger"> -10% <del>$1200</del></span>
            </div>
          </figure>
        </div>
      </div>
    </div>

  </section>
)
export default Deal
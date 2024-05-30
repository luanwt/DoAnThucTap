/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const  storedUserInfo  = localStorage.getItem('Account');
const CTPAddress = () => {
    const  retrievedUserInfo = JSON.parse(storedUserInfo);
    function addnumbers( a,b) {
        return a+b;
    }
    addnumbers("asda","dasda");
return(  
<>	<main class="col-md-9">

<a href="#" class="btn btn-light mb-3"> <i class="fa fa-plus"></i>Thêm địa chỉ mới </a>

<div class="row">
    <div class="col-md-6">
        <article class="box mb-4">
            <h6>{retrievedUserInfo.address}</h6>
            <a href="#" class="btn btn-light disabled"> <i class="fa fa-check"></i> Sử dụng</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
        </article>
    </div>  
    <div class="col-md-6">
        {/* <article class="box mb-4">
            <h6>{retrievedUserInfo.address}</h6>
           
            <a href="#" class="btn btn-light">Sử dụng</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
        </article> */}
    </div>  
    
</div>

</main> 
</>
)
};
export default CTPAddress
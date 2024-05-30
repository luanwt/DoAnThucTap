/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET_ID } from "../../api/apiService";
const cardTextStyle = {
    maxWidth: "80%",
    };    


  
const CTProflieM = () => {
    const [user, setUsers] = useState({});
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const userId = queryParams.get("user_Id");
    // useEffect(() => {
    // GET_ID(`users`, userId).then((item) => setUsers(item.data));
    // }, [userId]);

    let User = JSON.parse(localStorage.getItem('Account')) || [];

    const  storedUserInfo  = localStorage.getItem('Account');
    const  retrievedUserInfo = JSON.parse(storedUserInfo);
    // alert(retrievedUserInfo.id)

    return (
<>
<main className="col-md-9">
<article className="card mb-3">
    <div className="card-body">
        <figure className="icontext">
                <div className="icon">
                    <img className="rounded-circle img-sm border" src="images/avatars/avatar3.jpg"/>
                </div>
                <div className="text">
                    <strong>id :{retrievedUserInfo.id}</strong> 
                    <p>name :{retrievedUserInfo.name}</p>   
                    <p className="mb-2">email:{retrievedUserInfo.email}</p> 
                    <div>
                    phone :{retrievedUserInfo.phonenumber}
                    </div>
                    <a href="#" className="btn btn-light btn-sm">Chỉnh sửa</a>
                </div>
        </figure>

        <p>
            <i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉchỉ:   
            {retrievedUserInfo.address}
            <a href="#" className="btn-link"> Chỉnh sửa</a>
        </p>

        

        <article className="card-group card-stat">
            <figure className="card bg">
                <div className="p-3">
                     <h4 className="title text-danger">38</h4>
                    <span>Đơn hàng</span>
                </div>
            </figure>
            <figure className="card bg">
                <div className="p-3">
                     <h4 className="title text-danger">5</h4>
                    <span>Danh sách yêu thích</span>
                </div>
            </figure>
            <figure className="card bg">
                <div className="p-3">
                     <h4 className="title text-danger">12</h4>
                    <span>Chờ giao hàng</span>
                </div>
            </figure>
            <figure className="card bg">
                <div className="p-3">
                     <h4 className="title text-danger">50</h4>
                    <span>Đơn hàng đã giao
</span>
                </div>
            </figure>
        </article>
        

    </div> 
</article> 

<article className="card  mb-3">
    <div className="card-body">
        <h5 className="card-title mb-4">Đơn hàng gần đây</h5>	

        <div className="row">
        <div className="col-md-6">
          
        </div> 
        <div className="col-md-6">
           
        </div> 
        <div className="col-md-6">
           
        </div>
    </div> 

    <a href="#" className="btn btn-outline-primary btn-block"> See all orders <i className="fa fa-chevron-down"></i>  </a>
    </div> 
</article> 

</main> 
</>
);
};
export default CTProflieM


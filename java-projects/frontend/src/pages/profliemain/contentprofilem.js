/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET_ID } from "../../api/apiService";
import image from '../../assets/images/avatars/avatar3.jpg'
const cardTextStyle = {
    maxWidth: "80%",
};



const CTProflieM = () => {
    const [user, setUsers] = useState({});

    let User = JSON.parse(localStorage.getItem('Account')) || [];

    const storedUserInfo = localStorage.getItem('Account');
    const storedUserInfo1 = localStorage.getItem('Account1');

    const retrievedUserInfo = JSON.parse(storedUserInfo);
    // alert(retrievedUserInfo.id)
    return (
        <>
            <main class="col-md-9">
                <article class="card mb-3">
                    <div class="card-body">
                        <figure class="icontext">
                            <div class="icon">
                                {storedUserInfo1 !== 1 ? <img class="rounded-circle img-sm border" src={retrievedUserInfo.image} /> : <img class="rounded-circle img-sm border" src={image} />}
                            </div>
                            <div class="text">
                                <strong>id :{retrievedUserInfo.id}</strong>
                                <p>name :{retrievedUserInfo.name}</p>
                                <p class="mb-2">email:{retrievedUserInfo.email}</p>
                                <div>
                                    phone :{retrievedUserInfo.phonenumber}
                                </div>
                                <a href="#" class="btn btn-light btn-sm">Chỉnh sửa</a>
                            </div>
                        </figure>
                        <p>
                            <i class="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉchỉ:
                            {retrievedUserInfo.address}
                            <a href="#" class="btn-link"> Chỉnh sửa</a>
                        </p>



                        <article class="card-group card-stat">
                            <figure class="card bg">
                                <div class="p-3">
                                    <h4 class="title text-danger">38</h4>
                                    <span>Đơn hàng</span>
                                </div>
                            </figure>
                            <figure class="card bg">
                                <div class="p-3">
                                    <h4 class="title text-danger">5</h4>
                                    <span>Danh sách yêu thích</span>
                                </div>
                            </figure>
                            <figure class="card bg">
                                <div class="p-3">
                                    <h4 class="title text-danger">12</h4>
                                    <span>Chờ giao hàng</span>
                                </div>
                            </figure>
                            <figure class="card bg">
                                <div class="p-3">
                                    <h4 class="title text-danger">50</h4>
                                    <span>Đơn hàng đã giao
                                    </span>
                                </div>
                            </figure>
                        </article>


                    </div>
                </article>

                <article class="card  mb-3">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Đơn hàng gần đây</h5>

                        <div class="row">
                            <div class="col-md-6">

                            </div>
                            <div class="col-md-6">

                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>

                        <a href="#" class="btn btn-outline-primary btn-block"> See all orders <i class="fa fa-chevron-down"></i>  </a>
                    </div>
                </article>

            </main>
        </>
    );
};
export default CTProflieM


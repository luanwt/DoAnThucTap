/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import CTProflieM from "../../../pages/profliemain/contentprofilem";
import MenuProflie from "../../../pages/profileorders/menuProfile";



const Profile = () => (
    <>
        <section class="section-pagetop bg-gray">
            <div class="container">
                <h2 class="title-page">Tài khoản người dùng</h2>
            </div>
        </section>
        <section class="section-content padding-y">
            <div class="container">
                <div class="row">
                    <aside class="col-md-3">
                        <MenuProflie />
                    </aside>
                    <CTProflieM />
                </div>
            </div>
        </section>

    </>
);
export default Profile
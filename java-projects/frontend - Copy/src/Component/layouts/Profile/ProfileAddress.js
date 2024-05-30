
import React from "react";
import CTPAddress from "../../../pages/proflieaddress/CTPAddress";
import MenuProflie from "../../../pages/profileorders/menuProfile";





const ProfileAddress = () => (
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
                    <MenuProflie/>
                    </aside>

                    <CTPAddress />

                </div>
            </div>
        </section>

    </>
);
export default ProfileAddress
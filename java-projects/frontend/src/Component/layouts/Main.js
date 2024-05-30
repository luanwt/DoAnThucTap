import React from "react";
import {Routes,Route,Link} from 'react-router-dom';
import Category from "./Category";
import Content from "./Content";
import Detailproduct from "./Detail-product";
import Home from'./Home'
import ListingGrid from "./ListingGrid";
import Offers from "./Offers";
import Payment from "./Payment";
import Profile from "./Profile/ProfileMain";
import ProfileOrder from "./Profile/ProfileOrders";
import ProfileSeller from "./Profile/ProfileSeller";
import ProfliSetting from "./Profile/ProfileSetting";
import ProfileWishlist from "./Profile/ProfileWishlist";
import ProfileAddress from "./Profile/ProfileAddress";
import ShoppingCart from "./Shoppingcart";
import Login from "./Login";
import Register from "./Register";
import AllProduct from "./AllProduct";
import Search from "../../pages/Search/Search";
import SearchItems from "./SreachItems";
const Main=()=>(
    <main>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/detailproduct" element={<Detailproduct/>}/>
            <Route path="/content" element={<Content/>}/>
            <Route path="/list" element={<ListingGrid/>}/>
            <Route path="/listAP" element={<AllProduct/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile-orders" element={<ProfileOrder/>}/>
            <Route path="/profile-seller" element={<ProfileSeller/>}/>
            <Route path="/profile-setting" element={<ProfliSetting/>}/>
            <Route path="/profile-wishlist" element={<ProfileWishlist/>}/>
            <Route path="/profile-address" element={<ProfileAddress/>}/>
            <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/SearchResult" element={<Search/>}/>
            <Route path="/SearchItems" element={<SearchItems/>}/>
            
        </Routes>
    </main>
)
export default Main
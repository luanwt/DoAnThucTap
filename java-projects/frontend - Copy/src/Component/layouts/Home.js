/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { useEffect, useState } from "react";
import Slider from "../../pages/home/Slider";
import Items from "../../pages/home/Items";
import { GET_ALL } from "../../api/apiService";

function Home() {
    let a=localStorage.getItem('Account')
	
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, [categories]);
    
    const filteredCategories = categories.filter(
        (category) => category.isHome === 1
    );
    return (
        <div class="container">
            <Slider />
            {
            filteredCategories.length > 0 &&
                filteredCategories.map((row) => 
                (
                    <Items categoryName={row.name} categoryId={row.id}/>
                )
                )}
            
        </div>
    );
}
export default Home;
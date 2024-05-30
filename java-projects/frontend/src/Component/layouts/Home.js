/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { useEffect, useState } from "react";
import Slider from "../../pages/home/Slider";
import Items from "../../pages/home/Items";
import { GET_ALL } from "../../api/apiService";

function Home() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Added loading state
  
    useEffect(() => {
      setIsLoading(true); // Set loading to true while fetching
      GET_ALL(`categories`)
        .then((item) => setCategories(item.data))
        .catch((error) => console.error(error)) // Handle errors
        .finally(() => setIsLoading(false)); // Set loading to false after fetch
    }, []); // Empty dependency array
  
    const filteredCategories = categories.filter(
      (category) => category.isHome === 1
    );
  
    return (
      <div class="container">
        {isLoading ? (
          <p>Loading Categories...</p> // Display loading message
        ) : (
          <>
            <Slider />
            {filteredCategories.length > 0 && (
              <>
                {filteredCategories.map((row) => (
                  <Items
                    categoryName={row.name}
                    key={row.id}
                    categoryId={row.id}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    );
  }
  
  export default Home;
  
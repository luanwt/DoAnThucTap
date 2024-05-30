
import React, { Component, useEffect, useState } from 'react'

import { Link } from 'react-router-dom';





const SearchResults = ({ results }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

    function ChangeCircle(result){
     window.location.href = `/detailproduct?productId=${result}`;    
    }
  return(
  <table class="search-results-table ms-3">

      
    <tbody>
      {results.slice(0, 5).map((result) => (
        <tr key={result.name} class="search-result-row">
          <td class="image-cell" >
            <Link onClick={() => ChangeCircle(result.id)} to={`/detailproduct?productId=${result.id}`}>
              <img
     
                src={`./images/items/${result.image}`}
                alt={`Thumbnail for ${result.title}`}
                style={{ height: '100px' }}
              />
            </Link>
          </td>
          <td class="info-cell mt-4">
        
            <div class="name">name:{result.name}</div>
            <div class="price">{result.price}vnd</div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

)
}
export default SearchResults;

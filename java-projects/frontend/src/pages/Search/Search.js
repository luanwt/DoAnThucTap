// SearchComponent.js
import React from 'react';
import SearchResults from'./SearchResults'
import { Link, useNavigate } from 'react-router-dom';




const SearchComponent = ({
  searchQuery,
  handleSearchChange,
  searchResults,
  isDropdownOpen,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Assuming you have logic to update searchResults based on searchQuery
    console.log('Tìm kiếm đã được submit:', searchResults);
    // Store searched products in Local Storage (optional)
    if (searchResults.length > 0) {
      const productListJSON = JSON.stringify(searchResults);
      localStorage.setItem('searchedProducts', productListJSON);
      window.location.href = '/SearchItems'; 
      navigate(`/SearchItems`);
    }
  };
  return (
    <>
      {isDropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 100,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <SearchResults results={searchResults} />
        </div>
      )}
      <div class="input-group w-100">
        <input
          id="input"
          type="text"
          class="form-control"
          placeholder="Nhap ten san pham can tim"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div class="input-group-append">
          <button class="btn btn-dark" type="submit" onClick={handleSubmit}>
            <i class="fa fa-search"></i> Tìm Kiếm
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;


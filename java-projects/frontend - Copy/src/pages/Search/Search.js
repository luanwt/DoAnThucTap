// SearchComponent.js
import React from 'react';
import SearchResults from'./SearchResults'
import { Link } from 'react-router-dom';




const SearchComponent = ({searchQuery,handleSearchChange,searchResults,isDropdownOpen,
}) => (
  <>
    {isDropdownOpen && 
    (
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
        }}>
        <SearchResults results={searchResults} />
      </div>
    )}
    <div className="input-group w-100">
      <input
        id="input"  
        type="text"
        className="form-control"
        placeholder="Nhap ten san pham can tim"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="input-group-append">
        <button className="btn btn-dark" type="submit" >
          <i className="fa fa-search"></i> Tim Kiem
        </button>
      </div>
    </div>
  </>
);

export default SearchComponent;

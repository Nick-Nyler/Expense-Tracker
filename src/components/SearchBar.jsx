import React from 'react';
import '../App.css';

function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by description or category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
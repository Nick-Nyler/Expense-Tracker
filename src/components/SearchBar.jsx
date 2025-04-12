import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      style={styles.input}
      type="text"
      placeholder="Search by description or category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
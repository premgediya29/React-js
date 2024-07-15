import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search News" className="search-bar__input" />
      <button className="search-bar__button">Search</button>
    </div>
  );
}

export default SearchBar;

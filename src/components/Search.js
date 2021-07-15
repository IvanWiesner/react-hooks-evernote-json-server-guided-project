import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="filter">
      <input 
      id="search-bar" 
      type="text" 
      placeholder="Search Notes"
      name="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
       />
    </div>
  );
}

export default Search;

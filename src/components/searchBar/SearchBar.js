import { useEffect, useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ setSearch }) => {
  function handleChange(search) {
    const searchVal = search.target.value;
    setSearch(searchVal);
  }
  return (
    <div className="searchBar">
      <input
        type="search"
        onChange={handleChange}
        className="searchBar_input"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;

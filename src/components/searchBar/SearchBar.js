import { useEffect, useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

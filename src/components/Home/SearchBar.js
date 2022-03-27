import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import { FiLogOut } from "react-icons/fi";

const SearchBar = ({ setSearchInput }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <div className="appbar">
      <div className="searchbar">
        <span className="icon">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder=" "
          value={search}
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="search-button" onClick={setSearchInput(search)}>
          Search
        </button>
      </div>
      <span
        className="logout-icon"
        onClick={() => {
          handleSubmit();
        }}
      >
        <FiLogOut />
      </span>
    </div>
  );
};

export default SearchBar;

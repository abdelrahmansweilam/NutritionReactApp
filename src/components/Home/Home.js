import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodItems } from "../../actions";
import FoodItems from "./FoodItems";
import Goal from "./Goal";
import "./Home.css";
import SearchBar from "./SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);
  return (
    <div className="home">
      <SearchBar setSearchInput={setSearchInput} />
      <div className="main">
        <Goal />
        <FoodItems searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Home;

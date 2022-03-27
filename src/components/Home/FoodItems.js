import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import "./FoodItems.css";
import { useSelector } from "react-redux";
import FoodItemsFilters from "./FoodItemsFilters";

const filterItems = (items, sort, filter, searchInput) => {
  let result = {};
  if (sort === "Highest Calories") {
    result = items.sort((a, b) => (a.calories <= b.calories ? 1 : -1));
  } else {
    result = items.sort((a, b) => (a.calories > b.calories ? 1 : -1));
  }
  return result.filter((item) => {
    if (searchInput === "" && filter === "") return true;
    if (searchInput !== "" && filter === "") {
      if (searchInput === item.name) return true;
      else return false;
    }
    if (searchInput === "" && filter !== "") {
      if (item.calories <= parseInt(filter)) return true;
      else return false;
    }
    if (searchInput !== "" && filter !== "") {
      if (item.calories <= parseInt(filter) && searchInput === item.name)
        return true;
      else return false;
    }
    return false;
  });
};

const FoodItems = ({ searchInput }) => {
  const [sort, setSort] = useState("Highest Calories");
  const [filter, setFilter] = useState("");
  const foodItems = useSelector((state) => state.food_items);

  return (
    <div className="food-items-section">
      <FoodItemsFilters
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="food-items">
        {filterItems(foodItems, sort, filter, searchInput).map((foodItem) => (
          <FoodItem foodItem={foodItem} key={foodItem.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodItems;

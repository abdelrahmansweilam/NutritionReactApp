import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FoodItemsFilters = ({ sort, setSort, filter, setFilter }) => {
  return (
    <div className="food-items-row">
      <h3 className="food-items-title">Food Items</h3>
      <div className="filters">
        <div className="material-textfield">
          <input
            className="food-filter-input"
            type="number"
            placeholder=" "
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label className="filter-label">Max Calories</label>
        </div>
      </div>
      <div className="food-items-sort">
        <h3 className="food-items-sort-title">Sort by</h3>
        <div className="dropdown">
          <h3 className="food-items-sort-subtitle">
            {sort}
            <span className="icon">
              <IoIosArrowDown />
            </span>
          </h3>

          <div className="dropdown-content">
            <a
              href="#"
              onClick={() => {
                setSort("Highest Calories");
              }}
            >
              Highest Calories
            </a>
            <a
              href="#"
              onClick={() => {
                setSort("Lowest Calories");
              }}
            >
              Lowest Calories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsFilters;

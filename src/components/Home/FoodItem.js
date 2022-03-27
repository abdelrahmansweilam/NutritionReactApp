import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions";
import "./FoodItems.css";

const FoodItem = ({ foodItem }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(user, foodItem.calories));
  };
  return (
    <div className="food-item-card">
      <img src={"data:image/png;base64," + foodItem.picture} />
      <h3 className="food-item-title">{foodItem.name}</h3>
      <div className="food-item-info-row">
        <div className="food-item-info">
          <h6 className="food-item-subtitle">
            Calories: {foodItem.calories}kcal
          </h6>
          <h6 className="food-item-subtitle">Serving: {foodItem.serving}gm</h6>
        </div>
        <button
          type="submit"
          className="add-item-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default FoodItem;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDailyGoal } from "../../actions";
import "./SetCalories.css";

const SetCalories = () => {
  const [goal, setGoal] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDailyGoal(user, goal));
  };
  return (
    <div className="Calories-card">
      <div className="container">
        <h4 className="title">Set Your Goal</h4>
        <div className="material-textfield">
          <input
            type="number"
            placeholder=" "
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          />
          <label>Calories needed/day</label>
        </div>

        <button
          type="submit"
          className="outline-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default SetCalories;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Goal.css";

const Goal = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="goal-section">
      <h3 className="goal-title">Goal</h3>
      <div className="goal-card">
        <div className="goal-card-info">
          <h5 className="goal-card-title">Total Calories Needed:</h5>
          <h2 className="goal-card-title">{user.daily_calories}kcal</h2>
        </div>
      </div>
      <div className="goal-card">
        <div className="goal-card-info">
          <h5 className="goal-card-title">Remaining Calories:</h5>
          <h2 className="goal-card-title">{user.remaining_calories}kcal</h2>
        </div>
      </div>
    </div>
  );
};

export default Goal;

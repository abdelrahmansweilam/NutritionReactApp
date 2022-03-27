import axios from "axios";
// const bcrypt = require("bcrypt");

const saltRounds = 10;

export const register = (newUser) => {
  try {
    const url = "http://localhost:5000/users";
    return axios.post(url, {
      user: newUser,
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
    });

    // bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
    //   // Store hash in database here
    //   axios.put(url, {
    //     password: hash,
    //   });
    // });
  } catch (error) {
    throw error;
  }
};

export const login = (user) => {
  try {
    const url = "http://localhost:5000/login";
    return axios.post(url, {
      email: user.email,
      password: user.password,
    });

    // bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
    //   // Store hash in database here
    //   axios.put(url, {
    //     password: hash,
    //   });
    // });
  } catch (error) {
    throw error;
  }
};

export const setDailyCalories = (user_id, calories) => {
  try {
    const url = `http://localhost:5000/users/${user_id}`;
    return axios.put(url, {
      user: {
        daily_calories: parseInt(calories),
        remaining_calories: parseInt(calories),
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getFoodItems = () => {
  try {
    const url = "http://localhost:5000/food_items";
    return axios.get(url);
  } catch (error) {
    throw error;
  }
};

export const addFoodItem = (user, item_calories) => {
  try {
    const url = "http://localhost:5000/add_food_item";
    return axios.put(url, { id: user.id, food_item_calories: item_calories });
  } catch (error) {
    throw error;
  }
};

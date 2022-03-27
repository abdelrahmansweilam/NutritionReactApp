import * as api from "../api";

export const signup = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.register(newUser);
    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const signin = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const setDailyGoal = (user, newDailyCalories) => async (dispatch) => {
  try {
    const { data } = await api.setDailyCalories(user.id, newDailyCalories);
    dispatch({ type: "SET_GOAL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = (user) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchFoodItems = () => async (dispatch) => {
  try {
    const { data } = await api.getFoodItems();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addItem = (user, item_calories) => async (dispatch) => {
  try {
    const { data } = await api.addFoodItem(user, item_calories);
    dispatch({ type: "SET_GOAL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

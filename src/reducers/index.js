import { combineReducers } from "redux";
import user from "./user";
import food_items from "./food_items";

export default combineReducers({
  user,
  food_items,
});

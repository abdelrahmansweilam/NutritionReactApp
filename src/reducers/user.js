export default (user = {}, action) => {
  switch (action.type) {
    case "REGISTER":
      return action.payload;

    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return {};

    case "SET_GOAL":
      return action.payload;
    default:
      return user;
  }
};

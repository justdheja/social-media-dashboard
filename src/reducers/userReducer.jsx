export const UserLogInReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_LOG_IN":
      return true;  
    case "USER_LOG_OUT":
      return false;
    default:
      return state;
  }
}

export const UserListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return action.payload;
    default:
      return state;
  }
}
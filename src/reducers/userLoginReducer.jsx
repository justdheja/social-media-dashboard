const UserLogInReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_LOG_IN":
      return true;  
    case "USER_LOG_OUT":
      return false;
    default:
      return state;
  }
}

export default UserLogInReducer
export const UserLogInReducer = (
	state = { isLogIn: false, AdminInfo: {} },
	action
) => {
	switch (action.type) {
		case 'ADMIN_LOG_IN':
			return {
				isLogIn: true,
				AdminInfo: action.payload,
			};
		case 'ADMIN_LOG_OUT':
			return {
				isLogIn: false,
				AdminInfo: {},
			};
		default:
			return state;
	}
};

export const UserListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return action.payload;
    default:
      return state;
  }
}
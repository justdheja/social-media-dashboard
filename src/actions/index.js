export const logIn = () => {
  return {
		type: 'USER_LOG_IN',
	};
}

export const logOut = () => {
  return {
    type: "USER_LOG_OUT"
  }
}

export const getPost = (data) => {
  return {
    type: "GET_POST_LIST",
    payload: data,
  }
}

export const setUserList = (data) => {
  return {
    type: "SET_USER_LIST",
    payload: data
  }
}
export const logIn = (adminInfo) => {
  return {
		type: 'ADMIN_LOG_IN',
    payload: adminInfo
	};
}

export const logOut = () => {
  return {
    type: "ADMIN_LOG_OUT"
  }
}

export const setPostList = (data) => {
  return {
    type: "GET_POST_LIST",
    payload: data,
  }
}

export const setUserList = (data) => {
  return {
    type: "SET_USER_LIST",
    payload: data,
  }
}

export const setAlbumList = (data) => {
  return {
    type: "SET_ALBUM_LIST",
    payload: data,
  }
}

export const setPhotoList = (data) => {
  return {
    type: "SET_PHOTO_LIST",
    payload: data,
  }
}

export const setCommentList = (data) => {
  return {
    type: "SET_COMMENT_LIST",
    payload: data,
  }
}
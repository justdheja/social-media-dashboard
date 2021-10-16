export const AlbumListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALBUM_LIST":
      return action.payload;
    default:
      return state;
  }
}

export const PhotoListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PHOTO_LIST":
      return action.payload;
    default:
      return state;
  }
}
export const PostListReducer = (state = [], action) => {
  switch (action.type){
    case "GET_POST_LIST":
      return action.payload;
    default:
      return state;
  }
}

export const CommentListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENT_LIST":
      return action.payload;
    default:
      return state;
  }
}
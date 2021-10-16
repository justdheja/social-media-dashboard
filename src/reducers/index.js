import { combineReducers } from 'redux'
import { UserListReducer, UserLogInReducer } from './userReducer';
import { CommentListReducer, PostListReducer } from './postListReducer';
import { AlbumListReducer, PhotoListReducer } from './photoReducer';

export const reducers = combineReducers({
	isLoggedIn: UserLogInReducer,
  userList: UserListReducer,
  postList: PostListReducer,
  albumList: AlbumListReducer,
  photoList: PhotoListReducer,
  commentList: CommentListReducer,
});
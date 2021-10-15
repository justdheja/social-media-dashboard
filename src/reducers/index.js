import { combineReducers } from 'redux'
import { UserListReducer, UserLogInReducer } from './userLoginReducer';
import PostListReducer from './postListReducer';
import AlbumListReducer from './AlbumListReducer';

export const reducers = combineReducers({
	isLoggedIn: UserLogInReducer,
  userList: UserListReducer,
  postList: PostListReducer,
  albumList: AlbumListReducer,
});
import { combineReducers } from 'redux'
import { UserListReducer, UserLogInReducer } from './userLoginReducer';
import PostListReducer from './postListReducer';

export const reducers = combineReducers({
	isLoggedIn: UserLogInReducer,
  userList: UserListReducer,
  postData: PostListReducer,
});
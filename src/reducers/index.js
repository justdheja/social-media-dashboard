import UserLogInReducer from './userLoginReducer';
import { combineReducers } from 'redux'

export const reducers = combineReducers({
	isLoggedIn: UserLogInReducer,
});
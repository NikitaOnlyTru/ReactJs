import { combineReducers, createStore } from 'redux';
import messageReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersChatReducer';

export const store = createStore(
	combineReducers({
		messages: messageReducer,
		users: usersReducer,
	})
);

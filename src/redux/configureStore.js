import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { messagesReducer } from './reducers/messagesReducer/messagesReducer';
import { usersReducer } from './reducers/usersChatReducer/usersChatReducer';
import { userReducer } from './reducers/userReducer/userReducer';

const reducers = combineReducers({
	users: usersReducer,
	loading: usersReducer,
	error: usersReducer,
	messages: messagesReducer,
	user: userReducer,
	currentUser: userReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

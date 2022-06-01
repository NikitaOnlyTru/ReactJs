import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { messagesReducer } from './reducers/messagesReducer/messagesReducer';
import { usersReducer } from './reducers/usersReducer/usersReducer';

const reducers = combineReducers({
	users: usersReducer,
	loading: usersReducer,
	error: usersReducer,
	messages: messagesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import messageReducer from './reducers/messagesReducer/messagesReducer';
import usersReducer from './reducers/usersReducer.js/usersChatReducer';
import { ADD_User } from './actions/actionsType';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	messages: messageReducer,
	users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = store => next => action => {
	if (action.type !== ADD_User) {
		return next(action);
	}
	const timeOut = setTimeout(() => next(action), 3000);

	return () => {
		clearTimeout(timeOut);
	};
};

const logger = createLogger({
	diff: true,
	collapsed: true,
});

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(middleware, logger))
);

export const persistor = persistStore(store);

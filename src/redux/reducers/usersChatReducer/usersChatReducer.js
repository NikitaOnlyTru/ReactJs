import { errorAction, get_users, loadingAction } from '../../actions/actions';
import {
	ERROR_USERS,
	GET_USERS,
	LOADING_USERS,
} from '../../actions/actionsTypes';
import { API_URL_USERS } from '../../api/api';

const initialState = {
	users: [],
	loading: false,
	error: null,
};
export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_USERS:
			return {
				...state,
				loading: true,
			};
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case ERROR_USERS:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export const loadUsers = () => {
	return async dispatch => {
		dispatch(loadingAction());
		try {
			const response = await fetch(API_URL_USERS);
			const data = await response.json();
			dispatch(get_users(data));
		} catch (event) {
			dispatch(errorAction(event));
		}
	};
};

import { ERROR_USERS, GET_USERS, LOADING_USERS } from './actionsTypes';

export const get_users = data => ({
	type: GET_USERS,
	payload: data,
});

export const errorAction = err => ({
	type: ERROR_USERS,
	payload: err,
});

export const loadingAction = () => ({
	type: LOADING_USERS,
});

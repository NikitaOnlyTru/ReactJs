import { ADD_User, DELETE_USER } from '../../actions/actionsType';

const initialState = {
	users: [
		{
			name: 'Alex',
			id: 1,
		},
		{
			name: 'Andrei',
			id: 2,
		},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload),
			};
		case ADD_User:
			return { ...state, users: [...state.users, action.payload] };
		default:
			return state;
	}
};

export default usersReducer;

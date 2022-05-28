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
		{
			name: 'Max',
			id: 3,
		},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'deleteUser':
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload),
			};
		case 'addUser':
			return { ...state, users: [...state.users, action.payload] };
		default:
			return state;
	}
};

export default usersReducer;

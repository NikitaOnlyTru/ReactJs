const initialState = {
	messages: [
		{
			name: 'Alex',
			idMessage: 22,
			id: 1,
			title: 'Hello world',
		},
		{
			name: 'Alex',
			idMessage: 23,
			id: 1,
			title: 'Work',
		},
		{
			name: 'Max',
			idMessage: 24,
			id: 3,
			title: 'Home',
		},
	],
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'addMessage':
			return { ...state, messages: [...state.messages, action.payload] };
		case 'deleteMessage':
			return {
				...state,
				messages: state.messages.filter(
					item => item.idMessage !== action.payload
				),
			};
		default:
			return state;
	}
};

export default messagesReducer;

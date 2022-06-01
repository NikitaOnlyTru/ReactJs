import { ADD_MESSAGE, GET_MESSAGES } from '../../actions/actionsTypes';

const initialState = {
	messages: [
		{
			id: 1,
			idMessages: 1,
			name: 'Andrei',
			title: 'Hello World!',
		},
		{
			id: 2,
			idMessages: 2,
			name: 'Max',
			title: 'I learn English',
		},
	],
};

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MESSAGES:
			return { ...state, messages: [state.messages, action.payload] };
		case ADD_MESSAGE:
			return { ...state, messages: [...state.messages, action.payload] };

		default:
			return state;
	}
};

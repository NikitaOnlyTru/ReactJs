import React from 'react';
import Form from '../Form/Form';
import ListChat from '../List/ListChat';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_MESSAGE } from '../../redux/actions/actionsType';
import { messagesSelector } from '../../redux/reducers/messagesReducer/selector';

function Chats() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const messages = useSelector(messagesSelector);

	const messagesChat = messages.filter(item => {
		if (!id) return true;
		return item.id === Number(id);
	});

	const createChat = newChat => {
		dispatch({ type: ADD_MESSAGE, payload: newChat });
	};

	return (
		<>
			<Header />
			<div className='wrapper'>
				<Form create={createChat} id={id} />
				<ListChat messagesChat={messagesChat} />
			</div>
		</>
	);
}

export default Chats;

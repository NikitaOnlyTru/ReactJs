import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { messagesSelector } from '../../redux/reducers/messagesReducer/selector';
import Header from '../header/Header';
import Form from '../Form/Form';
import { ADD_MESSAGE } from '../../redux/actions/actionsTypes';
import './chats.scss';

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
			<Form create={createChat} id={id} />
			<ul className='chats__list'>
				{messagesChat.map((item, idx) => (
					<li
						key={`${item.idMessages}_${idx}`}
						id={item.idMessages}
						className='chats__item'
					>
						<h3>{item.name}</h3>
						<p>{item.title}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default Chats;

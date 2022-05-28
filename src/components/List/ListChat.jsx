import React from 'react';
import { useDispatch } from 'react-redux';
import Mybtn from '../UI/Mybtn';
import './list.scss';

function ListChat({ messagesChat }) {
	const dispatch = useDispatch();
	const deleteMessage = id => {
		dispatch({ type: 'deleteMessage', payload: id });
	};
	return (
		<div className='list'>
			<ul className='list__chat'>
				{messagesChat.map((item, idx) => (
					<li
						key={`${item.name}_${idx}`}
						className={'list__item'}
						id={item.idMessage}
					>
						<div>
							<h3>{item.name}</h3>
							<p>{item.title}</p>
						</div>
						<Mybtn onClick={() => deleteMessage(item.idMessage)} title={'x'} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListChat;

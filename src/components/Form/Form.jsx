import React, { useState } from 'react';
import Mybtn from '../UI/Mybtn';
import Myinput from '../UI/Myinput';
import './Form.scss';

function Form({ create, id }) {
	const [value, setValue] = useState({ name: '', title: '' });

	const addTitle = e => {
		e.preventDefault();
		let idMessage = Math.round(Math.random() * 1000);
		const newChat = {
			...value,
			id: Number(id),
			idMessage: idMessage,
		};
		create(newChat);
		setValue({ name: '', title: '' });
	};
	return (
		<form className='form'>
			<div style={{ width: '100%' }}>
				<Myinput
					value={value.name}
					onChange={e => setValue({ ...value, name: e.target.value })}
					style={{ margin: '0 0 15px 0' }}
				/>
				<Myinput
					value={value.title}
					onChange={e => setValue({ ...value, title: e.target.value })}
				/>
			</div>
			<Mybtn onClick={addTitle} title={'Отправить'} />
		</form>
	);
}

export default Form;

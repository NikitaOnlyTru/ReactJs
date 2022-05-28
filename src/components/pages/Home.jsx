import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Mybtn from '../UI/Mybtn';
import Myinput from '../UI/Myinput';
import './chats.scss';

function Home() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);

	const [value, setValue] = useState('');
	const handleChange = e => {
		setValue(e.target.value);
	};

	const addHandler = () => {
		const id = Date.now();

		let obj = {
			id: id,
			name: value,
		};

		dispatch({ type: 'addUser', payload: obj });
	};

	const deleteHandler = id => {
		dispatch({ type: 'deleteUser', payload: id });
	};
	return (
		<>
			<Header />
			<div className='wrapper'>
				<Myinput
					value={value.name}
					onChange={handleChange}
					style={{ margin: '0 0 15px 0' }}
				/>
				<Mybtn onClick={addHandler} title={'создать чат'} />
				<ul className='chats'>
					{users.map((item, idx) => (
						<li className='chats__item' key={idx}>
							<NavLink to={`/chats/${item.id}`}>
								<h3 key={idx}>{item.name}</h3>
							</NavLink>
							<Mybtn onClick={() => deleteHandler(item.id)} title={'x'} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Home;

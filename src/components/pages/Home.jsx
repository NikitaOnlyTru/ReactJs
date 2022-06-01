import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ADD_User, DELETE_USER } from '../../redux/actions/actionsType';
import { usersSelector } from '../../redux/reducers/usersReducer.js/selector';
import Header from '../Header/Header';
import Mybtn from '../UI/Mybtn';
import Myinput from '../UI/Myinput';
import './chats.scss';

function Home() {
	const dispatch = useDispatch();
	const users = useSelector(usersSelector);

	const [value, setValue] = useState([{ chatName: '' }]);
	const handleChange = e => {
		setValue(e.target.value);
	};

	const addHandler = () => {
		const id = Date.now();

		let obj = {
			id: id,
			name: value,
		};
		setValue({ chatName: '' });
		dispatch({
			type: ADD_User,
			payload: obj,
		});
		setValue({ chatName: '' });
	};

	const deleteHandler = id => {
		dispatch({ type: DELETE_USER, payload: id });
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
								<h3>{item.name}</h3>
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
	usersSelector,
	usersLoadingSelector,
	errorSelector,
} from '../../redux/reducers/usersReducer/selector';
import { loadUsers } from '../../redux/reducers/usersReducer/usersReducer';
import Header from '../header/Header';
import MyBtn from '../UI/Mybtn';
import './home.scss';

function Home() {
	const loading = useSelector(usersLoadingSelector);
	const users = useSelector(usersSelector);
	const error = useSelector(errorSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUsers());
	}, []);

	const handleError = () => {
		dispatch(loadUsers());
	};

	if (loading) {
		return (
			<div>
				<h3>Идёт загрузка</h3>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				Произошла ошибка
				<MyBtn onClick={handleError}>обновить</MyBtn>
			</div>
		);
	}
	return (
		<>
			<Header />
			<ul className='home__list'>
				{users.map(item => (
					<NavLink
						to={`/chats/${item.id}`}
						key={item.id}
						className='home__link'
					>
						<li>{item.name}</li>
					</NavLink>
				))}
			</ul>
		</>
	);
}

export default Home;

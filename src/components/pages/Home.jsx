import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector } from '../../redux/reducers/usersChatReducer/selector';
import {
	usersLoadingSelector,
	usersSelector,
} from '../../redux/reducers/usersChatReducer/selector';
import { loadUsers } from '../../redux/reducers/usersChatReducer/usersChatReducer';
import { NavLink } from 'react-router-dom';
import Mybtn from '../UI/Mybtn';
import Header from '../Header/Header';
import './home.scss';

const Home = () => {
	const dispatch = useDispatch();
	const loading = useSelector(usersLoadingSelector);
	const users = useSelector(usersSelector);
	const error = useSelector(errorSelector);

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
				<Mybtn onClick={handleError}>обновить</Mybtn>
			</div>
		);
	}
	return (
		<div>
			<Header />
			<ul className='home__list'>
				{users.map(item => (
					<li className='home__item' key={item.id}>
						<NavLink
							to={`/chats/${item.id}`}
							key={item.id}
							className='home__link'
						>
							{item.name}{' '}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;

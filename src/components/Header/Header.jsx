import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../../redux/actions/actions';
import { userSelector } from '../../redux/reducers/userReducer/selectors';
import Mybtn from '../UI/Mybtn';
import './header.scss';

function Header() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);

	const handleAuth = () => {
		if (user) {
			dispatch(logoutInitiate());
		}
		setTimeout(() => {
			navigate('/');
		}, 3000);
	};
	return (
		<header className='header'>
			<div className='header__logo'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 48 48'
					width='48px'
					height='48px'
					fillRule='evenodd'
					clipRule='evenodd'
				>
					<path
						fill='#29b6f6'
						fillRule='evenodd'
						d='M24,4C12.96,4,4.01,12.954,4.01,24	c0,10.141,7.545,18.519,17.325,19.823v-4.03c0-1.136-0.716-2.158-1.793-2.519c-5.643-1.897-9.68-7.293-9.531-13.611	c0.181-7.692,6.444-13.74,14.133-13.662c7.662,0.078,13.849,6.316,13.849,14c0,0.72-0.056,1.44-0.164,2.151	c-1.713,11.291-16.412,17.637-16.492,17.672C22.208,43.939,23.097,44,24,44c11.04,0,19.99-8.954,19.99-20S35.04,4,24,4'
						clipRule='evenodd'
					/>
				</svg>
				<p className='header__logo-title'>main chats</p>
			</div>

			<button onClick={() => setVisible(!visible)}>
				<svg
					fill='#29b6f6'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='48px'
					height='48px'
				>
					<path d='M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z' />
				</svg>
			</button>

			{visible && (
				<nav>
					<ul>
						<li>
							{' '}
							<NavLink to={'/home'}>Главная</NavLink>
						</li>
						<li>
							<Mybtn onClick={handleAuth} style={{ width: '100%' }}>
								Выйти
							</Mybtn>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}

export default Header;

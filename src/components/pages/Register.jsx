import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/reducers/userReducer/selectors';
import { registerInitiate } from '../../redux/actions/actions';
import Mybtn from '../UI/Mybtn';
import Myinput from '../UI/Myinput';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [displayName, setDisplayName] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

	const handleSubmit = e => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			return;
		}
		dispatch(registerInitiate(email, password, displayName));
	};

	return (
		<div>
			<h2 style={{ marginTop: 20 }}>Register</h2>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Myinput
					type='text'
					value={displayName}
					onChange={e => setDisplayName(e.target.value)}
					placeholder='Name'
				/>
				<Myinput
					type='text'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='E-mail'
					style={{ margin: '10px 0' }}
				/>
				<Myinput
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='password'
				/>
				<Myinput
					type='password'
					value={passwordConfirm}
					onChange={e => setPasswordConfirm(e.target.value)}
					placeholder='passwordConfirm'
					style={{ margin: '10px 0' }}
				/>
				<Mybtn type='submit'>SIGN UP</Mybtn>
				<NavLink to={'/'} style={{ margin: '10px 0' }}>
					<Mybtn style={{ width: '100%' }}>Войти</Mybtn>
				</NavLink>
			</form>
		</div>
	);
};

export default Register;

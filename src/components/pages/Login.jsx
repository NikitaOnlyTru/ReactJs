import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/reducers/userReducer/selectors';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../../redux/actions/actions';
import Myinput from '../UI/Myinput';
import Mybtn from '../UI/Mybtn';
import './login.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/home');
		}
	}, [navigate, user]);

	const handleSubmit = e => {
		e.preventDefault();
		if (!email || !password) {
			return;
		}
		dispatch(loginInitiate(email, password));
	};

	const navigateRegister = () => {
		navigate('/register');
	};

	return (
		<div className='login__wrapper'>
			<h2 className='login__title'>Login</h2>
			<form onSubmit={handleSubmit} className='login__form'>
				<Myinput
					type={'text'}
					onChange={e => setEmail(e.target.value)}
					style={{ margin: '20px 0 20px 0' }}
				/>
				<Myinput
					type={'password'}
					onChange={e => setPassword(e.target.value)}
					style={{ margin: '0 0 20px 0' }}
				/>
				<div
					style={{
						display: 'flex',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Mybtn type='submit'>SIGN IN</Mybtn>
					<Mybtn onClick={navigateRegister}>Register</Mybtn>
				</div>
			</form>
		</div>
	);
};

export default Login;

import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Chats from './pages/Chats';

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={'/'} element={<Login />} />
				<Route path={'/register'} element={<Register />} />
				<Route path={'/home'} element={<Home />} />
				<Route path={'/chats/:ip'} element={<Chats />} />
			</Routes>
		</div>
	);
}

export default App;

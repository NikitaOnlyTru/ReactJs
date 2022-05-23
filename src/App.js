import { Route, Routes } from 'react-router-dom';
import Chats from './components/pages/Chats';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import './index.scss';

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/profile' element={<Profile />}></Route>
				<Route path='/chats/:id' element={<Chats />}></Route>
				<Route path='*' element={<Error />}></Route>
			</Routes>
		</div>
	);
}

export default App;

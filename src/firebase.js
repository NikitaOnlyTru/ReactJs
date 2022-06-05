import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyABHKQPICNaqI9fnoY1u9as25gG931SUG4',
	authDomain: 'fir-test-66519.firebaseapp.com',
	databaseURL: 'https://fir-test-66519-default-rtdb.firebaseio.com',
	projectId: 'fir-test-66519',
	storageBucket: 'fir-test-66519.appspot.com',
	messagingSenderId: '865613959459',
	appId: '1:865613959459:web:669732e469a9def6af3c96',
	measurementId: 'G-8N4184MCW7',
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();

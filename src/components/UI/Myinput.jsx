import React from 'react';
import './input.scss';

function Myinput(props) {
	return <input type='text' {...props} className={'myinput'}></input>;
}

export default Myinput;

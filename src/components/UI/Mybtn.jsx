import React from 'react';
import './btn.scss';

function Mybtn(props) {
	return (
		<button {...props} className={'btn'}>
			{props.children}
		</button>
	);
}

export default Mybtn;

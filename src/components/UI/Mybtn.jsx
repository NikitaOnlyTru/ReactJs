import React from 'react';
import './btn.scss';

function Mybtn(props) {
	return (
		<button {...props} className={'btn'}>
			{props.title}
		</button>
	);
}

export default Mybtn;

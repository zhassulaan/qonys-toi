import React from 'react';

function Counter({ time, label }) {
	return (
		<div>
			<h3>{ time }</h3>
			<h4>{ label }</h4>
		</div>
	);
}

export default Counter;

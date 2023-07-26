import React from 'react';

function Counter({ time, label }) {
	return (
		<div>
			<h2>{ time }</h2>
			<h4>{ label }</h4>
		</div>
	);
}

export default Counter;

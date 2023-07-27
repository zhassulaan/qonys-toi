import React from 'react';
import Calendar from '../components/Calendar';

function Time() {
	return (
		<div className='home-content time'>
			<h6 className='time-label'>Той күні</h6>
			<h5 className='time-date'>19 тамыз 2023</h5>
			<Calendar />
			<h6 className='time-label'>Басталу уақыты</h6>
			<h5 className='time-date'>сағат 13:00</h5>
		</div>
	);
}

export default Time;

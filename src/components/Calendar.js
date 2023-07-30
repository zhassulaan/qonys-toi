import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/calendar.scss';

function Calendar() {
	const weekday_names = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	
	const active_day = 12;
	const date = new Date();
	const first_day = new Date(date.getFullYear(), 7, 1);
	const last_day = new Date(date.getFullYear(), 7 + 1, 0);
	const days_count = last_day.getDate();
	const first_day_of_week = first_day.getDay();

	let calendar = [];
	let week = [];
	for (let i = 1; i < first_day_of_week; i++) {
		week.push('');
	}
	for (let day = 1; day <= days_count; day++) {
		if (week.length === 7) {
			calendar.push(week);
			week = [];
		}
		week.push(day);
	}
	calendar.push(week);

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				{ weekday_names.map((name, idx) =>
					<p className='calendar-header__label' key={ idx }>{ name }</p>
				) }
			</div>
			{ calendar.map((week, idx) => (
				<div key={ idx } className='calendar-week'>
					{ week.map((day, idx) =>
						<span key={ idx } className={ `calendar-week__day ${ day === active_day ? 'active' : ''}`}>
							{ day }
							{ (day === active_day) ? <FontAwesomeIcon icon={ faHeart } className='active-icon'/> : null }
						</span>
					) }
				</div>
			)) }
		</div>
	);
}

export default Calendar;

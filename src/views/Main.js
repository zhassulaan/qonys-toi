import React, { useState, useEffect, useMemo } from 'react';
import { getTimeDifference } from '../utils/date';
import Counter from '../components/Counter';
import house from '../assets/images/house.png';

function Main() {
	const target_date = useMemo(() => new Date('2023-08-19T13:00:00'), []);
	const [countdown, setCountdown] = useState(getTimeDifference(target_date));

	useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeDifference(target_date));
    }, 1000);

    return () => clearInterval(interval);
  }, [target_date]);

	return (
		<div className='home-content main' id='main'>
			<h1 className='home-content__title'>Қоныс той</h1>
			<h6 className='home-content__subtitle'>19 тамыз 2023</h6>
			<img src={ house } alt='house icon' className='home-content__image' />
			<div className='home-content__counter'>
				<Counter time={ countdown.days } label={ 'күн' } />
				<Counter time={ countdown.hours } label={ 'сағат' } />
				<Counter time={ countdown.minutes } label={ 'минут' } />
				<Counter time={ countdown.seconds } label={ 'секунд' } />
			</div>
		</div>
	);
}

export default Main;

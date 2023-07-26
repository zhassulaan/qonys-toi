import React from 'react';
import '../assets/styles/home.scss';
import house from '../assets/images/house.png';
import Counter from '../components/Counter';

function Home() {
	return (
		<div className='home'>
			<h1 className='home-title'>Қоныс той</h1>
			<h5 className='home-subtitle'>19 тамыз 2023</h5>
			<img src={ house } alt="house icon" className='home-image' />
			<div className="home-counter">
				<Counter time={ 10 } label={ 'күн' } />
				<Counter time={ 10 } label={ 'сағат' } />
				<Counter time={ 10 } label={ 'минут' } />
				<Counter time={ 10 } label={ 'секунд' } />
			</div>
		</div>
	);
}

export default Home;

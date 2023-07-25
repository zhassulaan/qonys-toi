import React from 'react';
import '../assets/styles/home.scss';
import house from '../assets/images/house.png';

function Home() {
	return (
		<div className='home'>
			<div className="home-box">
				<div className="home-box__inner">
					<h3 className='home-title'>Қоныс той</h3>
					<h5 className='home-subtitle'>19 тамыз 2023</h5>
					<img src={ house } alt="house icon" className='home-image' />
					<div className="home-counter">
						<div className="home-counter__box">
							<h1>10</h1>
							<h4>күн</h4>
						</div>
						<div className="home-counter__box">
							<h1>10</h1>
							<h4>сағат</h4>
						</div>
						<div className="home-counter__box">
							<h1>10</h1>
							<h4>минут</h4>
						</div>
						<div className="home-counter__box">
							<h1>10</h1>
							<h4>секунд</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

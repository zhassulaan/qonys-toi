import React from 'react';
import Map from '../components/Map';

function Location() {
	return (
		<div className='home-content location'>
			<h2 className='home-content__title'>Мекен жайы:</h2>
			<h6 className='home-content__subtitle'>Еркінқала, трасса 90</h6>
			<Map />
		</div>
	);
}

export default Location;

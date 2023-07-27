import React from 'react';
import family from '../assets/images/family.png';

function Info() {
	return (
		<div className='home-content info'>
			<h2 className='home-content__title'>Құрметті қонақтар!</h2>
			<p className='home-content__description'>Сіз(дер)ді қоныс тойымызға арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
			<img src={ family } alt='family icon' className='home-content__icon' />
		</div>
	);
}

export default Info;

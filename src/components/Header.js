import React, { useState } from 'react';
import '../assets/styles/header.scss';

function Header() {
	const [menu, setMenu] = useState(false);
	const [music, setMusic] = useState(false);

	function toggleMenu() {
    setMenu(!menu);
  };
	function togglePlay() {
    setMusic(!music);
  };

	return (
		<div className='header'>
			<div className='header-background'></div>
			{ music ?
				<div className='header-player' onClick={ togglePlay }>
					<span className='header-player__icon'></span>
				</div>
					:
				<div className='header-stop' onClick={ togglePlay }>
					<span className='header-stop__icon'></span>
				</div>
			}
			<div className='header-menu' onClick={ toggleMenu }>
				<span className={ `header-menu__icon ${ menu ? 'active' : '' }` }></span>
			</div>
		</div>
	);
}

export default Header;

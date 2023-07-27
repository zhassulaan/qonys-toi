import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Main from '../views/Main';
import Info from '../views/Info';
import Time from '../views/Time';
import Location from '../views/Location';
import Form from '../views/Form';
import '../assets/styles/home.scss';

function Home() {
	const scrollOptions = {
    scrollingSpeed: 700,
  };

	return (
		<Fullpage className='home' {...scrollOptions}>
			<div className='home-background'></div>
			<FullPageSections>
				<FullpageSection>
					<Main />
				</FullpageSection>
				<FullpageSection id='info'>
					<Info />
				</FullpageSection>
				<FullpageSection id='time'>
					<Time />
				</FullpageSection>
				<FullpageSection id='location'>
					<Location />
				</FullpageSection>
				<FullpageSection id='form'>
					<Form />
				</FullpageSection>
			</FullPageSections>
		</Fullpage>
	);
}

export default Home;

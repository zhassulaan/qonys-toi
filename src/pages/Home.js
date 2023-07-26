import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import Main from '../views/Main';
import Info from '../views/Info';
import Time from '../views/Time';
import Location from '../views/Location';
import Form from '../views/Form';
import '../assets/styles/home.scss';

function Home() {
	useEffect(() => {
    // Get all the home-content elements
    const sections = document.querySelectorAll('.home-content');

    // Function to handle the wheel event
    const handleScroll = debounce((e) => {
      e.preventDefault();

      // Calculate the scroll direction
      const deltaY = e.deltaY;
      const direction = deltaY > 0 ? 'next' : 'prev';

      // Find the current active section
      let activeSection = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          activeSection = section;
        }
      });

      // Scroll to the next or previous section
      if (activeSection) {
        const nextSection = direction === 'next' ? activeSection.nextElementSibling : activeSection.previousElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }, 100); // Debounce delay of 100ms

    // Add the event listener to the window
    window.addEventListener('wheel', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

	return (
		<div className='home'>
			<div className='home-background'></div>
			<Main />
			<Info />
			<Time />
			<Location />
			<Form />
		</div>
	);
}

export default Home;

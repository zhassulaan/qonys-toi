import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function Menu({ isOpened, closeMenu }) {
	const current_year = new Date().getFullYear();
	const [pageHeight, setPageHeight] = useState(0);
	const [sections, setSections] = useState([]);
	// const perPage = useRef(0);

	useEffect(() => {
		setPageHeight(document.body.scrollHeight);
		setSections(Array.from(document.querySelectorAll('.home-content')));
		// perPage = pageHeight / sections.length;
	}, [pageHeight]);

	function handleScroll(sectionId) {
    // const sectionIndex = sections.findIndex((section) => section.id === sectionId);
    // const scrollToPosition = perPage * sectionIndex;
		console.log(pageHeight);

    // window.scrollTo({
    //   top: scrollToPosition,
    //   behavior: 'smooth',
    // });
  }

	return (
		<Wrapper>
			<div className={ `background ${ isOpened ? 'active' : '' }` } onClick={ closeMenu }></div>
			<div className={ `body ${ isOpened ? 'active' : '' }` }>
				<ul className='body-list'>
					<li>
						<span className='body-list__link' onClick={ () => handleScroll('main') }></span>
					</li>
					<li>
						<span className='body-list__link' onClick={ () => handleScroll('info') }>Шақырту</span>
					</li>
					<li>
						<span className='body-list__link' onClick={ () => handleScroll('time') }>Уақыты</span>
					</li>
					<li>
						<span className='body-list__link' onClick={ () => handleScroll('location') }>Мекен жайы</span>
					</li>
					<li>
						<span className='body-list__link' onClick={ () => handleScroll('form') }>Анкета</span>
					</li>
				</ul>
				<Link to='https://zhassulaan.github.io/Portfolio/' className='body-rights'>{ `\u00A9 Serikuly Zh  ${ current_year }. All right reserved.` }</Link>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	.background {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 0;
		height: calc(100vh - 60px);
		background-color: rgba(0, 0, 0, .3);
		z-index: 4;
		&.active {
			width: 100%;
		}
	}
	.body {
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 0;
		height: calc(100vh - 60px);
		background-color: var(--clr-white);
		border-radius: 12px 0 0 12px;
		padding: 3.75vh 0;
		z-index: 5;
		transition: .3s ease-in-out;
		&.active {
			width: 60%;
			padding: 3.75vh 5%;
		}
		&-list {
			display: flex;
			flex-direction: column;
			gap: 2vh;
			&__link {
				font-size: 18px;
				color: var(--clr-black);
			}
		}
		&-rights {
			color: var(--clr-black);
			text-decoration: underline;
			font-size: 9px;
			margin-top: auto;
		}
	}
`;

export default Menu;

import React from 'react';
import { styled } from 'styled-components';

function Input({ text, action }) {
	return (
		<Wrapper onClick={ action }>{ text }</Wrapper>
	);
}

const Wrapper = styled.button`
	width: 60%;
	height: 4.375vh;
	background-color: var(--clr-white);
	color: var(--clr-green);
	font-size: 16px;
	font-weight: 600;
	border: 1px solid var(--clr-green);
	border-radius: 24px;
	margin: 0 auto;
	padding: 0 5%;
`;

export default Input;

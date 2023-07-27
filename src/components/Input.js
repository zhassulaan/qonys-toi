import React from 'react';
import { styled } from 'styled-components';

function Input({ name, error, value, action }) {
	return (
		<Wrapper
			type='text'
			name={ name }
			id={ name }
			className={ error ? `input_error` : 'input_default' }
			value={ value }
			onChange={ action }
		/>
	);
}

const Wrapper = styled.input`
	width: 100%;
	height: 4.375vh;
	border-radius: 12px;
	padding: 0 5%;
`;

export default Input;

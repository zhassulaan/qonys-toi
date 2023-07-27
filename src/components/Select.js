import React from 'react';
import { styled } from 'styled-components';

function Input({ options, error, value, action }) {
	return (
		<Wrapper className='select'>
			{ options.map((option) =>
				<span key={ option.id } onClick={ () => action(option) } className='select-option'>
					<input
						type='radio'
						id={ option.id }
						name='option'
						value={ option.id }
						className='select-option__input'
						checked={ option.id === value?.id }
					/>
					<p className={ error ? 'select-option__error' : '' }>{ option.text }</p>
				</span>
			) }
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1vh;
	.select {
		&-option {
			text-align: start;
			display: flex;
			gap: 3%;
			&__input:after,
			&__input:checked:after {
				position: relative;
				content: '';
				bottom: -2px;
				left: -2px;
				display: inline-block;
				visibility: visible;
				width: 15px;
        height: 15px;
        border-radius: 50%;
				border: 1px solid var(--clr-green);
				padding: 1px;
			}
			&__input:after {
        background-color: var(--clr-white);
    	}
    	&__input:checked:after {
				left: 0;
				width: 9px;
        height: 9px;
				box-shadow: 0 0 0 2px var(--clr-green), 0 0 0 4px white, 0 0 0 5px var(--clr-green);
    	}
			&__error {
				color: var(--clr-red);
				text-decoration: underline;
			}
		}
	}
`;

export default Input;

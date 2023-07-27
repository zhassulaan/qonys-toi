import React from 'react';
import { styled } from 'styled-components';

function Modal({ text, error_text, closeModal }) {
	return (
		<Wrapper>
			<div className='background' onClick={ closeModal }></div>
			<div className='body'>
				<div className="body-close" onClick={ closeModal }>
					<span className='body-close__icon'></span>
				</div>
				{ error_text ?
					<p className='body-text body-text_error'>{ error_text }</p>
						:
					<p className='body-text body-text_default'>{ text }</p>
				}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: -6.8%;
	width: 100vw;
	height: 100vh;
	z-index: 3;
	.background,
	.body {
		position: absolute;
	}
	.background {
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		background-color: var(--clr-black);
		opacity: .3;
		z-index: 4;
	}
	.body {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 75%;
		height: 20%;
		background-color: var(--clr-white);
		border-radius: 12px;
		z-index: 5;
		&-text {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80%;
			height: 100%;
			font-size: 20px;
			font-weight: 600;
			margin: auto;
			&_error {
				color: var(--clr-red);
			}
			&_default {
				color: var(--clr-green);
			}
		}
		&-close {
			position: absolute;
			display: inline-block;
			width: 20px;
			height: 20px;
			top: 10px;
			right: 10px;
			&__icon,
			&__icon::before,
			&__icon::after {
				position: absolute;
				display: block;
				width: 100%;
				height: 1.5px;
				background-color: var(--clr-black);
			}
			&__icon {
				top: 50%;
				transform: rotate(45deg);
				&::before,
				&::after {
					content: '';
				}
				&::before {
					top: -8px;
					transform: rotate(-90deg) translate(-8px, 0);
				}
				&::after {
					bottom: -8px;
					transform: rotate(-90deg) translate(8px, 0);
				}
			}
		}
	}
`;

export default Modal;

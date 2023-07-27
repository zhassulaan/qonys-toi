import React from 'react';
import styled from 'styled-components';

function Alert() {
	return (
		<Wrapper>
			<p className="title">!</p>
			<p className="text">Шақырту тек мобильді құрғыларға ғана қолжетімді</p>
			<p className="subtext">(Егерде ұялы телефон қолданып жатсыңыз, құрылғыңызды бұрыңыз)</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100vw;
	height: 100vh;
	.title,
	.subtext,
	.text {
		text-align: center;
		color: var(--clr-gold);
	}
	.title {
		font-size: 80px;
	}
	.text {
		font-size: 23px;
	}
	.subtext {
		width: 50%;
		color: var(--clr-grey);
		font-size: 18px;
	}
`;

export default Alert;

import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<Wrapper>
			Окно
		</Wrapper>
	);
}

const Wrapper = styled.header`
  position: fixed;
	display: none;
`

export default Header;

import React from 'react';
import styled from 'styled-components';

function Map() {
  return (
		<Wrapper id='map'>
			<iframe
				src='https://yandex.com/map-widget/v1/?um=constructor%3A615f5ca637044f46cb3bb8a5d615e63f8b19e465b49ff2a6ee810fc3a85167fd&amp;source=constructor'
				width='100%'
				height='100%'
				frameborder='0'
				title='Yandex Map'
			></iframe>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: calc(100% - 2px);
	height: 35.975vh;
	border: 1px solid var(--clr-grey);
	margin-top: 4.175vh;
`;

export default Map;

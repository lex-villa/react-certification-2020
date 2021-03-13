import React from 'react';
import styled from 'styled-components';

//#1C5476
// Styled components
const Header = styled.header`
	background-color: #1C5476;
	width: 100%;
	height: 48px;
	align-items: center;
  position: fixed;
  top: 0;
  left: 0;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;

	main {
    margin-top: 5rem;
	}

	@media (min-width: 600px) {
		height: 64px;
	}
`;

const MainHeader = ({ children }) => {
	return (
		<Header>
			{children}
		</Header>
	);
};

export default MainHeader;
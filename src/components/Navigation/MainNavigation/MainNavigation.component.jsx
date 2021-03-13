import React from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';

// Styled components
const Button = styled.button`
  width: fit-content;
  height: 1rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;
  margin-top: 23px;

  span {
    display: block;
    width: 1rem;
    height: 2px;
    background: white;
  }
`;

const MainNavigation = () => {
  return (
    <MainHeader>
      <Button>
        <span />
        <span />
        <span />
      </Button>
    </MainHeader>
  );
};

export default MainNavigation;

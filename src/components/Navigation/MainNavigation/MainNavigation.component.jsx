import React, { useState } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import SideDrawer from '../SideDrawer';
import Backdrop from '../../UIElements/Backdrop';

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
  margin-top: 17px;

  span {
    display: block;
    width: 1rem;
    height: 2px;
    background: white;
  }

  @media (min-width: 600px) {
    margin-top: 23px;
  }
`;

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => setDrawerIsOpen(true);

  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <p>Holi</p>
      </SideDrawer>
      <MainHeader>
        <Button onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </Button>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

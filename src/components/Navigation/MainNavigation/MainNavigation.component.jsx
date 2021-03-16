import React, { useState } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import SideDrawer from '../SideDrawer';
import NavLinks from '../NavLinks';
import Backdrop from '../../UIElements/Backdrop';
import SearchInput from '../../SearchInput';
import Toggle from '../../UIElements/Toggle';

// Styled components
const Button = styled.button`
  width: fit-content;
  height: 1rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  margin-top: 17px;
  outline: none;

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

const ToggleAndLogIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  align-self: auto;
  margin-left: auto;

  .logIcon {
    div {
      margin: 0;
      margin-right: 10px;
      background-color: red;
      width: 40px;
      height: 40px;
      border-radius: 31px;
      cursor: pointer;
    }
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
        <nav style={{ height: '100%' }}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <div style={{ display: 'flex', alignSelf: 'baseline' }}>
          <Button onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </Button>

          <SearchInput />
        </div>

        <ToggleAndLogIconContainer>
          <div>
            <Toggle />
          </div>

          <div className="logIcon">
            <div />
          </div>
        </ToggleAndLogIconContainer>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

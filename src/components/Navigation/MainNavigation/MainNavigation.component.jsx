import React, { useState, useContext } from 'react';

import MainHeader from '../MainHeader';
import SideDrawer from '../SideDrawer';
import NavLinks from '../NavLinks';
import Backdrop from '../../UIElements/Backdrop';
import SearchInput from '../../SearchInput';
import Toggle from '../../UIElements/Toggle';
import { Button, ToggleAndLogIconContainer } from './MainNavigation.styled';
import { Context } from '../../../utils/store/Store';

const MainNavigation = () => {
  const [state] = useContext(Context);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => setDrawerIsOpen(true);

  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <div className="MainNavigation__firstWrapper--alignment">
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
            {state.isLoggedIn ? (
              <img src={state.userData.avatarUrl} alt={state.userData.name} />
            ) : (
              <div />
            )}
          </div>
        </ToggleAndLogIconContainer>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

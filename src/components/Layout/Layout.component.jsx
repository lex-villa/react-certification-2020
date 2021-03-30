import React from 'react';

import MainNavigation from '../Navigation/MainNavigation';
import { Main } from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <Main className="container">{children}</Main>
    </>
  );
}

export default Layout;

import React from 'react';

import MainNavigation from '../Navigation/MainNavigation';
import { Main } from './Layout.styled';

function Layout({ children, setQueryFromSearchInput }) {
  return (
    <>
      <MainNavigation setQueryFromSearchInput={setQueryFromSearchInput} />
      <Main className="container">{children}</Main>
    </>
  );
}

export default Layout;

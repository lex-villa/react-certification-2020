import React from 'react';
import MainNavigation from '../Navigation/MainNavigation';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;

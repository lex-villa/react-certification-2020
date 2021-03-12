import React from 'react';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}

export default Layout;

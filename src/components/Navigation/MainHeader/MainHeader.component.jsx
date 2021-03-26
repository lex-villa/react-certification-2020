import React from 'react';

import { Header } from './MainHeader.styled';

const MainHeader = ({ children }) => {
  return <Header>{children}</Header>;
};

export default MainHeader;

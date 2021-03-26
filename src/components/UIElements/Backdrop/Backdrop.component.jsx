import React from 'react';
import ReactDOM from 'react-dom';

import { DivBackdrop } from './Backdrop.styled';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <DivBackdrop onClick={props.onClick} />,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

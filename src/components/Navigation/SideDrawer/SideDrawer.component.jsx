import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Aside } from './SideDrawer.styled';

const SideDrawer = (props) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <Aside onClick={props.onClick} ref={nodeRef}>
        {props.children}
      </Aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

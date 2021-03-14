import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 250px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

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
			<Aside onClick={props.onClick} ref={nodeRef}>{props.children}</Aside>
		</CSSTransition>
	);

	return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

import React, { useContext } from 'react';

import { Container, ToggleContainer } from './Toggle.styled';
import { Context } from '../../../utils/store/Store';

const Toggle = () => {
  const dispatch = useContext(Context)[1];

  const handleClick = (e) => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  return (
    <Container>
      <ToggleContainer className="switch" htmlFor="toogleCheckbox">
        <input type="checkbox" id="toogleCheckbox" onClick={handleClick} />
        <span className="slider round" />
      </ToggleContainer>
      <div htmlFor="toogleCheckbox" className="text">
        Dark Mode
      </div>
    </Container>
  );
};

export default Toggle;

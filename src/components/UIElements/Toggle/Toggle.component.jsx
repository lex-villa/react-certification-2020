import React from 'react';

import { Container, ToggleContainer } from './Toggle.styled';

const Toggle = () => {
  return (
    <Container>
      <ToggleContainer className="switch" htmlFor="toogleCheckbox">
        <input type="checkbox" id="toogleCheckbox" />
        <span className="slider round" />
      </ToggleContainer>
      <div htmlFor="toogleCheckbox" className="text">
        Dark Mode
      </div>
    </Container>
  );
};

export default Toggle;

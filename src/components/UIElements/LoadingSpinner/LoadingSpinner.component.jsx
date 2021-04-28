import React from 'react';

import { SpinnerContainer } from './LoadingSpinner.styled';

const LoadingSpinner = (props) => {
  return (
    <SpinnerContainer>
      <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
        <div className="lds-dual-ring" />
      </div>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

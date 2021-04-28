import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from './Button.styled';

const Button = (props) => {
  if (props.href) {
    return (
      <ButtonContainer>
        <a
          className={`button button--${props.size || 'default'} ${
            props.inverse && 'button--inverse'
          } ${props.danger && 'button--danger'}`}
          href={props.href}
        >
          {props.children}
        </a>
      </ButtonContainer>
    );
  }
  if (props.to) {
    return (
      <ButtonContainer>
        <Link
          to={props.to}
          exact={props.exact}
          className={`button button--${props.size || 'default'} ${
            props.inverse && 'button--inverse'
          } ${props.danger && 'button--danger'}`}
        >
          {props.children}
        </Link>
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer>
      <button
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </ButtonContainer>
  );
};

export default Button;

import styled from 'styled-components';

export const Header = styled.header`
  background-color: #1c5476;
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;

  main {
    margin-top: 5rem;
  }

  .MainNavigation__firstWrapper--alignment {
    display: flex;
    align-self: baseline;
  }

  @media (min-width: 600px) {
    height: 64px;
  }
`;

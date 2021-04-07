import styled from 'styled-components';

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 250px;
  background: ${({ theme }) => theme.body};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  nav {
    height: '100%';
  }
`;

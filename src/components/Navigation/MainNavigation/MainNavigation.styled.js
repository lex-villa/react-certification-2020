import styled from 'styled-components';

export const Button = styled.button`
  width: fit-content;
  height: 1rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  margin-top: 17px;
  outline: none;

  span {
    display: block;
    width: 1rem;
    height: 2px;
    background: white;
  }

  @media (min-width: 600px) {
    margin-top: 23px;
  }
`;

export const ToggleAndLogIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  align-self: auto;
  margin-left: auto;

  .logIcon {
    div {
      margin: 0;
      margin-right: 10px;
      background-color: red;
      width: 40px;
      height: 40px;
      border-radius: 31px;
      cursor: pointer;
    }
  }
`;

import styled from 'styled-components';

export const GridView = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-rows: 5%;
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-column-gap: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 364px;
  }
`;

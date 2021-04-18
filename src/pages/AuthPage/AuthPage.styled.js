import styled from 'styled-components';

export const Card = styled.div`
  width: 90%;
  max-width: 25rem;
  margin: 7rem auto;
  text-align: center;

  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundCard};
  margin-bottom: 1rem;

  .header {
    color: white;
    text-align: center;
  }

  form {
    margin-bottom: 1rem;
  }
`;

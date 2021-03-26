import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
  width: 100%;
  height: 100%;
  cursor: pointer;

  .card-home-review__image {
    width: 100%;
    height: 7.5rem;
    margin-right: 1.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-home-review__info {
    padding: 1rem;
    text-align: center;

    h2,
    p {
      margin: 0 0 0.5rem 0;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

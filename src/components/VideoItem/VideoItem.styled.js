import styled from 'styled-components';

export const VideoItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  height: 120px;

  .videoItem__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .videoItem__info {
    font-size: 13px;
    margin-left: 10px;
    width: 100%;
  }
`;

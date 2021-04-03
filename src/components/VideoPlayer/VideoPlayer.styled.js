import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  height: 100%;

  .videoPlayer__iframePlayer {
    width: 100%;
    height: 70%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .videoPlayer__info {
    width: 100%;
    height: 30%;

    h3 {
      font-size: 15px;
      overflow: hidden;
    }

    p {
      font-size: 12px;
    }
  }
`;

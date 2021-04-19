import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  display: flex;

  .videoDetails__videoPlayer--position {
    width: 150%;
    height: 85.9vh;
    overflow: hidden;
  }

  .videoDetails__listSuggestedVideos--position {
    overflow: scroll;
    height: 85.9vh;
    width: 100%;
  }
`;

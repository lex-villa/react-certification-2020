import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  display: flex;

  .videoDetails__videoPlayer--position {
    border: 1px solid red;
    width: 150%;
  }

  .videoDetails__listSuggestedVideos--position {
    overflow: scroll;
    height: 85.9vh;
    width: 100%;
  }
`;

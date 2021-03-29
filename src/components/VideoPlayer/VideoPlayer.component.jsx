import React from 'react';

import { VideoPlayerContainer } from './VideoPlayer.styled';

const VideoPlayer = ({ videoInfo }) => {
  return (
    <VideoPlayerContainer>
      <div>
        <iframe
          src={`http://www.youtube.com/embed/${videoInfo.items[0].id}`}
          title="video player"
          allowFullScreen
        />
      </div>
      <div>
        <h3>{videoInfo.items[0].snippet.title}</h3>
        <p>{videoInfo.items[0].snippet.description}</p>
      </div>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;

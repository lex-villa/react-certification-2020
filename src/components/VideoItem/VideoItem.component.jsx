import React from 'react';
import { useHistory } from 'react-router-dom';

import { VideoItemContainer } from './VideoItem.styled';

const VideoItem = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/videoDetails/${props.videoId}`);
  };

  return (
    <VideoItemContainer onClick={onClickHandler} aria-hidden="true">
      <div className="videoItem__image">
        <img src={`${props.image}`} alt={props.title} />
      </div>
      <div className="videoItem__info">
        <h3>{props.title}</h3>
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;

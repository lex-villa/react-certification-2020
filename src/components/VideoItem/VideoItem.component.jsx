import React from 'react';
import { useHistory } from 'react-router-dom';

const VideoItem = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/videoDetails/${props.videoId}`);
  };

  return (
    <div onClick={onClickHandler} aria-hidden="true">
      <div className="videoItem__image">
        <img src={`${props.image}`} alt={props.title} />
      </div>
      <div className="videoItem__info">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from './CardHomePreview.styled';

const CardHomePreview = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    console.log('path perro', history.location.pathname)
    if (history.location.pathname === '/favorites') {
      history.push(`/favorites/${props.videoId}`);
    } else {
      history.push(`/videoDetails/${props.videoId}`);
    }
  };

  return (
    <Card onClick={onClickHandler}>
      <div className="card-home-review__image">
        <img src={`${props.image}`} alt={props.title} />
      </div>
      <div className="card-home-review__info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default CardHomePreview;

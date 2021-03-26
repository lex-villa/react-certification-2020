import React from 'react';
import { Card } from './CardHomePreview.styled';

const CardHomePreview = (props) => {
  return (
    <Card>
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

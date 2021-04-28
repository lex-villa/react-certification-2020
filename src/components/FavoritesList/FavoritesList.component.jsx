import React, { useState } from 'react';

import CardHomePreview from '../CardHomePreview';
import { GridView } from './FavoritesList.styled';

const FavoritesList = () => {
  const [storedFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));

  let content = <p>Add favorites</p>;

  if (storedFavorites) {
    content = (
      <GridView>
        {storedFavorites.map((element) => (
          <CardHomePreview
            key={`${element.id}`}
            image={element.image}
            title={element.title}
            description={element.description}
            videoId={element.id}
          />
        ))}
      </GridView>
    );
  }

  return <>{content}</>;
};

export default FavoritesList;

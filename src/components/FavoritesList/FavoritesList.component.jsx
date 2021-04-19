import React from 'react';

import CardHomePreview from '../CardHomePreview';
import { GridView } from './FavoritesList.styled';
import { data } from '../../utils/youtube-videos-mock';

const FavoritesList = () => {
  return (
    <GridView>
      {data.items.map((element) => (
        <CardHomePreview
          key={`${element.id.videoId}`}
          image={element.snippet.thumbnails.high.url}
          title={element.snippet.title}
          description={element.snippet.description}
          videoId={element.id.videoId}
        />
      ))}
    </GridView>
  );
};

export default FavoritesList;

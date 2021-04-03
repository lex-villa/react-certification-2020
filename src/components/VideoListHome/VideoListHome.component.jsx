import React from 'react';

import CardHomePreview from '../CardHomePreview';
import { GridView } from './VideoListHome.styled';

const VideoListHome = (props) => {
  return (
    <GridView>
      {props.data.items.map((element) => (
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

export default VideoListHome;

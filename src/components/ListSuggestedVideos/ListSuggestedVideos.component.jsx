import React from 'react';

import VideoItem from '../VideoItem/VideoItem.component';

const ListSuggestedVideos = ({ videosSuggested }) => {
  console.log('lista en video sugges');
  console.log(videosSuggested);
  return (
    <>
      {videosSuggested.map((video) => (
        <VideoItem
          key={`${video.id.videoId}`}
          image={
            video.snippet.thumbnails.high.url || video.snippet.thumbnails.standard.url
          }
          title={video.snippet.title}
          videoId={video.id.videoId}
        />
      ))}
    </>
  );
};

export default ListSuggestedVideos;

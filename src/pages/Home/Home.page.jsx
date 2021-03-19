import React from 'react';

import VideoListHome from '../../components/VideoListHome/VideoListHome.component';
import { data } from '../../utils/youtube-videos-mock';

const HomePage = () => {
  return <VideoListHome data={data} />;
};

export default HomePage;
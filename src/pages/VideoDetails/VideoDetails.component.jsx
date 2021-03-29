import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ErrorModal from '../../components/UIElements/ErrorModal/ErrorModal.component';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';
import { useHttpClient } from '../../utils/hooks/http-hook';

const VideoDetails = () => {
  const { videoId } = useParams();

  const [videoInfo, setVideoInfo] = useState();
  // const [videosSuggested, setVideoSuggested] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchVideoInfo = async (videoIdParam) => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_VIDEOS_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const part = 'snippet';
      const id = videoIdParam;

      try {
        const responseData = await sendRequest(
          `${baseURL}?part=${part}&key=${apikey}&id=${id}`
        );
        setVideoInfo(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    // const fecthVideosSuggested = async (videoIdParam) => {
    //   const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_VIDEOS_URL;
    //   const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
    //   const part = 'snippet';
    //   const relatedToVideoId = videoIdParam;
    //   const maxResults = 10;
    //   const type = 'video';

    //   try {
    //     const responseData = await sendRequest(
    //       `${baseURL}?part=${part}&key=${apikey}&relatedToVideoId=${relatedToVideoId}&maxResults=${maxResults}&type=${type}`
    //     );
    //     setVideoSuggested(responseData);
    //   } catch (err) {
    //     console.log(err);
    //   };
    // };

    fetchVideoInfo(videoId);
    // fecthVideosSuggested(videoId);
  }, [sendRequest, videoId]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && videoInfo && <VideoPlayer videoInfo={videoInfo} />}
    </>
  );
};

export default VideoDetails;

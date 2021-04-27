import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import ListSuggestedVideos from '../../components/ListSuggestedVideos/ListSuggestedVideos.component';
import ErrorModal from '../../components/UIElements/ErrorModal/ErrorModal.component';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';
import { useHttpClient } from '../../utils/hooks/http-hook';
import { VideoDetailsContainer } from './VideoDetails.styled';

const VideoDetails = () => {
  const { videoId } = useParams();

  const isMountedRef = useRef(null);

  const [videoInfo, setVideoInfo] = useState();
  const [videosSuggested, setVideoSuggested] = useState();
  const {
    isLoading: isLoadingFetchVideoInfo,
    error: errorFetchVideoInfo,
    sendRequest: sendRequestFetchVideoInfo,
    clearError: clearErrorFetchVideoInfo,
  } = useHttpClient();

  const {
    isLoading: isLoadingSuggestedVideos,
    error: errorSuggestedVideos,
    sendRequest: sendRequestSuggestedVideos,
    clearError: clearErrorSuggestedVideos,
  } = useHttpClient();

  useEffect(() => {
    isMountedRef.current = true;

    const fetchVideoInfo = async (videoIdParam) => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_VIDEOS_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const part = 'snippet';
      const id = videoIdParam;

      try {
        const responseData = await sendRequestFetchVideoInfo(
          `${baseURL}?part=${part}&key=${apikey}&id=${id}`
        );

        if (isMountedRef.current) {
          setVideoInfo(responseData);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideoInfo(videoId);

    return () => {
      isMountedRef.current = false;
    };
  }, [sendRequestFetchVideoInfo, videoId]);

  useEffect(() => {
    const fecthVideosSuggested = async (videoIdParam) => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_SEARCH_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const part = 'snippet';
      const relatedToVideoId = videoIdParam;
      const maxResults = 10;
      const type = 'video';

      try {
        const responseData = await sendRequestSuggestedVideos(
          `${baseURL}?part=${part}&key=${apikey}&relatedToVideoId=${relatedToVideoId}&maxResults=${maxResults}&type=${type}`
        );

        setVideoSuggested(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    fecthVideosSuggested(videoId);
  }, [sendRequestSuggestedVideos, videoId]);

  return (
    <>
      <ErrorModal error={errorFetchVideoInfo} onClear={clearErrorFetchVideoInfo} />
      <ErrorModal error={errorSuggestedVideos} onClear={clearErrorSuggestedVideos} />
      {isLoadingFetchVideoInfo && isLoadingSuggestedVideos && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <VideoDetailsContainer>
        {!isLoadingFetchVideoInfo && videoInfo && (
          <div
            className="videoDetails__videoPlayer--position"
            data-testid="videoPlayerSection"
          >
            <VideoPlayer videoInfo={videoInfo} />
          </div>
        )}

        {!isLoadingSuggestedVideos && videosSuggested && (
          <div
            className="videoDetails__listSuggestedVideos--position"
            data-testid="suggesstedSection"
          >
            <ListSuggestedVideos videosSuggested={videosSuggested.items} />
          </div>
        )}
      </VideoDetailsContainer>
    </>
  );
};

export default VideoDetails;

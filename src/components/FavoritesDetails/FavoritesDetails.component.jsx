import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ListSuggestedVideos from '../ListSuggestedVideos/ListSuggestedVideos.component';
import ErrorModal from '../UIElements/ErrorModal/ErrorModal.component';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import { useHttpClient } from '../../utils/hooks/http-hook';
import { VideoDetailsContainer } from './FavoritesDetails.styled';
import { data } from '../../utils/youtube-videos-mock';

const FavoritesDetails = () => {
  const { videoId } = useParams();

  const [videoInfo, setVideoInfo] = useState();
  const [favorites, setfavorites] = useState([])

  console.log(favorites)

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

    const formatedStoredFavorites = storedFavorites.map((video) => {
      return {
        id: {
          videoId: video.id,
        },
        snippet: {
          thumbnails: {
            high: {
              url: video.image,
            },
          },
          title: video.title,
        },
      };
    });

    setfavorites(formatedStoredFavorites);
  }, []);

  const {
    isLoading: isLoadingFetchVideoInfo,
    error: errorFetchVideoInfo,
    sendRequest: sendRequestFetchVideoInfo,
    clearError: clearErrorFetchVideoInfo,
  } = useHttpClient();

  useEffect(() => {
    const fetchVideoInfo = async (videoIdParam) => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_VIDEOS_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const part = 'snippet';
      const id = videoIdParam;

      try {
        const responseData = await sendRequestFetchVideoInfo(
          `${baseURL}?part=${part}&key=${apikey}&id=${id}`
        );
        setVideoInfo(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideoInfo(videoId);
  }, [sendRequestFetchVideoInfo, videoId]);

  return (
    <>
      <ErrorModal error={errorFetchVideoInfo} onClear={clearErrorFetchVideoInfo} />
      {isLoadingFetchVideoInfo && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <VideoDetailsContainer>
        {!isLoadingFetchVideoInfo && videoInfo && (
          <div className="videoDetails__videoPlayer--position">
            <VideoPlayer videoInfo={videoInfo} />
          </div>
        )}

        {data.items && (
          <div className="videoDetails__listSuggestedVideos--position">
            <ListSuggestedVideos videosSuggested={favorites} />
          </div>
        )}
      </VideoDetailsContainer>
    </>
  );
};

export default FavoritesDetails;

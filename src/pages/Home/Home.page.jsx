import React, { useState, useEffect } from 'react';

import ErrorModal from '../../components/UIElements/ErrorModal/ErrorModal.component';
import VideoListHome from '../../components/VideoListHome/VideoListHome.component';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../utils/hooks/http-hook';
//import { data } from '../../utils/youtube-videos-mock';

const HomePage = () => {
  const [data, setData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_SEARCH_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const maxResults = 10;
      const queryToSearch = 'goku vs vegeta majin buu';

      try {
        const responseData = await sendRequest(`${baseURL}?part=snippet&key=${apikey}&q=${queryToSearch}&maxResults=${maxResults}`)
        console.log(responseData);
        setData(responseData);
      } catch (err) {
        console.log(err);
      };
    };

    fetchPlaces();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && data && (
        <VideoListHome data={data} />
      )}

    </>
  );
};

export default HomePage;

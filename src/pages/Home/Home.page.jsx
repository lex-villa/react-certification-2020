import React, { useState, useEffect, useContext } from 'react';

import ErrorModal from '../../components/UIElements/ErrorModal/ErrorModal.component';
import VideoListHome from '../../components/VideoListHome/VideoListHome.component';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../utils/hooks/http-hook';
import { Context } from '../../utils/store/Store';

const HomePage = () => {
  const [data, setData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const state = useContext(Context)[0];

  useEffect(() => {
    const fetchPlaces = async (queryFromSearchBarParam) => {
      const baseURL = process.env.REACT_APP_YOUTUBE_API_V3_SEARCH_URL;
      const apikey = process.env.REACT_APP_GOOGLE_API_KEY;
      const maxResults = 10;
      const queryToSearch = queryFromSearchBarParam;

      try {
        const responseData = await sendRequest(
          `${baseURL}?part=snippet&key=${apikey}&q=${queryToSearch}&maxResults=${maxResults}`
        );
        setData(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlaces(state.queryToSearch);
  }, [sendRequest, state.queryToSearch]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && data && <VideoListHome data={data} />}
    </>
  );
};

export default HomePage;

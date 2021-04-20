import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../utils/store/Store';

import { VideoPlayerContainer } from './VideoPlayer.styled';

const VideoPlayer = ({ videoInfo }) => {
  const [state] = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);
  const [, setIsFavoriteIndex] = useState();
  const [storedFavorites, setStoredFavorites] = useState();

  useEffect(() => {
    const isFound = JSON.parse(localStorage.getItem('favorites'))?.findIndex(
      (element) => {
        return element.id === videoInfo.items[0].id;
      }
    );
    console.log('se encontro', isFound);
    setIsFavoriteIndex(isFound);
    setIsFavorite(isFound >= 0);
  }, [storedFavorites, videoInfo.items]);

  const handleClickAdd = async () => {
    const thereIsStoredFavorites = await JSON.parse(localStorage.getItem('favorites'));

    const itemToStore = {
      id: videoInfo.items[0].id,
      image:
        videoInfo.items[0].snippet.thumbnails.standard.url ||
        videoInfo.items[0].snippet.thumbnails.default.url,
      title: videoInfo.items[0].snippet.title,
      description: videoInfo.items[0].snippet.description,
    };

    if (thereIsStoredFavorites) {
      console.log('entro al if');
      thereIsStoredFavorites.push(itemToStore);
      console.log('despues del push', thereIsStoredFavorites);
      localStorage.setItem('favorites', JSON.stringify(thereIsStoredFavorites));
    } else {
      console.log('entro al else');
      localStorage.setItem('favorites', JSON.stringify([itemToStore]));
    }

    setStoredFavorites(JSON.parse(localStorage.getItem('favorites')));
  };

  const handleClickRemove = async () => {
    const storedFavoritesToRemove = await JSON.parse(localStorage.getItem('favorites'));
    const newArray = storedFavoritesToRemove.filter((element) => {
      return element.id !== videoInfo.items[0].id;
    });

    localStorage.setItem('favorites', JSON.stringify(newArray));
    setStoredFavorites(JSON.parse(localStorage.getItem('favorites')));
  };

  let buttonToggle;
  if (isFavorite) {
    buttonToggle = (
      <button type="button" onClick={handleClickRemove}>
        Remove favorites
      </button>
    );
  } else {
    buttonToggle = (
      <button type="button" onClick={handleClickAdd}>
        Add favorites
      </button>
    );
  }
  console.log('valor del btn', buttonToggle)

  return (
    <VideoPlayerContainer>
      <div className="videoPlayer__iframePlayer">
        <iframe
          src={`http://www.youtube.com/embed/${videoInfo.items[0].id}`}
          title="video player"
          allowFullScreen
        />
      </div>
      <div className="videoPlayer__info">
        {state.isLoggedIn && buttonToggle}
        {/* {buttonToggle} */}
        <h3>{videoInfo.items[0].snippet.title}</h3>
        <p>{videoInfo.items[0].snippet.description}</p>
      </div>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;

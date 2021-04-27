import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';
import Store, { Context } from '../../utils/store/Store';
import 'regenerator-runtime/runtime';

describe('<VideoPlayer />', () => {
  test('not render the favorite/delete button if is not logged in', () => {
    render(
      <Store>
        <VideoPlayer
          videoInfo={{
            items: [
              {
                snippet: {
                  title: 'title',
                  description: 'description',
                },
              },
            ],
          }}
        />
      </Store>
    );

    const buttonFavorite = screen.queryByTestId('btn-add-favorite');
    const buttonDelete = screen.queryByTestId('btn-delete-favorite');

    expect(buttonFavorite && buttonDelete).toBe(null);
  });

  test('render the favorite button if is logged in', () => {
    const state = {
      queryToSearch: 'wizeline',
      isDarkTheme: false,
      isLoggedIn: true,
      userData: null,
    };

    render(
      <Context.Provider value={[state]}>
        <VideoPlayer
          videoInfo={{
            items: [
              {
                snippet: {
                  title: 'title',
                  description: 'description',
                },
              },
            ],
          }}
        />
      </Context.Provider>
    );

    const buttonFavorite = screen.queryByTestId('btn-add-favorite');

    expect(buttonFavorite).toBeTruthy();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';
import Store from '../../utils/store/Store';
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
            ]
          }}
        />
      </Store>
    );

    const buttonFavorite = screen.queryByTestId('btn-add-favorite');
    const buttonDelete = screen.queryByTestId('btn-delete-favorite');

    expect(buttonFavorite && buttonDelete).toBe(null);
  });
});

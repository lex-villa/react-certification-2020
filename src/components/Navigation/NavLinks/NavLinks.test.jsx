import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavLinks from './NavLinks.component';
import Store, { Context } from '../../../utils/store/Store';
import 'regenerator-runtime/runtime';

describe('<NavLinks />', () => {
  test('not render the "Favorites" navLink if is not logged in', () => {
    render(
      <Store>
        <BrowserRouter>
          <NavLinks
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
        </BrowserRouter>
      </Store>
    );

    const navLinkToFavorites = screen.queryByTestId('navLink-route-to-favorites');

    expect(navLinkToFavorites).toBe(null);
  });

  test('render the "Favorites" navLink if is logged in', () => {
    const state = {
      queryToSearch: 'wizeline',
      isDarkTheme: false,
      isLoggedIn: true,
      userData: null,
    };

    render(
      <Context.Provider value={[state]}>
        <BrowserRouter>
          <NavLinks
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
        </BrowserRouter>
      </Context.Provider>
    );

    const navLinkToFavorites = screen.queryByTestId('navLink-route-to-favorites');

    expect(navLinkToFavorites).toBeTruthy();
  });
});

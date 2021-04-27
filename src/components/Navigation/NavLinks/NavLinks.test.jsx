import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import NavLinks from './NavLinks.component';
import Store, { Context } from '../../../utils/store/Store';
import 'regenerator-runtime/runtime';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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

  /// ////////////////////////////////////////////////////////////
  // The next test throws this FAIL,
  // I have done a lot of research and I don't know why it happens.

  // expect(jest.fn()).toHaveBeenCalledWith(...expected)
  // Expected: "/"
  // Number of calls: 0

  test('Home NavLink redirect to "/" route', () => {
    const state = {
      queryToSearch: 'wizeline',
      isDarkTheme: false,
      isLoggedIn: true,
      userData: null,
    };

    render(
      <Context.Provider value={[state]}>
        <MemoryRouter>
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
        </MemoryRouter>
      </Context.Provider>
    );

    const navLinkHome = screen.queryByTestId('navLink-home');
    fireEvent.click(navLinkHome);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});

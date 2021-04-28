import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthPage from './AuthPage.page';
import Store from '../../utils/store/Store';
import 'regenerator-runtime/runtime';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../utils/login.api.js');

describe('<AuthPage />', () => {
  test('elements rendered properly', async () => {
    render(
      <Store>
        <MemoryRouter initialEntries={['/auth']}>
          <AuthPage />
        </MemoryRouter>
      </Store>
    );

    const inputUsername = screen.queryByTestId('input-username');
    const inputPassword = screen.queryByTestId('input-password');
    const sumbmitBtn = screen.queryByTestId('submit-btn');

    expect(inputUsername).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(sumbmitBtn).toBeTruthy();
  });

  /// ////////////////////////////////////////////////////////////
  // The next test throws this FAIL,
  // I have done a lot of research and I don't know why it happens.

  // expect(jest.fn()).toHaveBeenCalledWith(...expected)
  // Expected: "/"
  // Number of calls: 0

  test('the submit button redirect to "/" route', async (done) => {
    const { rerender } = render(
      <Store>
        <MemoryRouter>
          <AuthPage />
        </MemoryRouter>
      </Store>
    );

    const inputUsername = screen.queryByTestId('input-username');
    const inputPassword = screen.queryByTestId('input-password');
    const sumbmitBtn = screen.queryByTestId('submit-btn');

    fireEvent.change(inputUsername, { target: { value: 'wizeline' } });
    fireEvent.change(inputPassword, { target: { value: 'Rocks' } });
    fireEvent.click(sumbmitBtn);

    setTimeout(() => {
      rerender(
        <Store>
          <MemoryRouter>
            <AuthPage />
          </MemoryRouter>
        </Store>
      );

      expect(mockHistoryPush).toHaveBeenCalledWith('/');
      done();
    });
  });
});

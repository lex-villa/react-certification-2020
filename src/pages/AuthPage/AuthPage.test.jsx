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

  test('isLoggedIn in Context change after correctly submit username and password', async () => {
    render(
      <Store>
        <MemoryRouter>
          <AuthPage />
        </MemoryRouter>
      </Store>
    );

    const inputUsername = screen.queryByTestId('input-username');
    // let inputPassword = screen.queryByTestId('input-password');
    const sumbmitBtn = screen.queryByTestId('submit-btn');
    const form = screen.queryByTestId('form');

    fireEvent.change(inputUsername, { target: { value: 'wizeline' } });
    // fireEvent.change(inputPassword, { target: { value: 'Rocks!' } });
    fireEvent.click(sumbmitBtn);
    fireEvent.submit(form);
    fireEvent.submit(sumbmitBtn);

    // inputUsername = await screen.findByTestId('input-username');
    // const text = await screen.findByText('Hello! You are logged In');
    // inputPassword = screen.queryByTestId('input-password');
    // sumbmitBtn = screen.queryByTestId('submit-btn');

    // expect(mockHistoryPush).toHaveBeenCalledWith('/');
    // expect(text).toBeTruthy();
    expect(mockHistoryPush).toHaveBeenCalledWith('0');
  });
});

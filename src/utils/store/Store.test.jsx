import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import Store, { initialState } from './Store';
import reducer from '../reducers/reducer';

describe('Store Context', () => {
  test('return configured initial state', () => {
    render(<Store />);
    const { result } = renderHook(() => useReducer(reducer, initialState));
    const state = result.current[0];
    expect(state).toStrictEqual({
      isDarkTheme: false,
      isLoggedIn: false,
      queryToSearch: 'wizeline',
      userData: null,
    });
  });

  test('test the correct update when a user trigger a search', () => {
    render(<Store />);
    const { result } = renderHook(() => useReducer(reducer, initialState));

    act(() => {
      result.current[1]({ type: 'UPDATE_QUERY_TO_SEARCH', queryToSearch: 'Goku' });
    });

    const state = result.current[0];

    expect(state).toStrictEqual({
      isDarkTheme: false,
      isLoggedIn: false,
      queryToSearch: 'Goku',
      userData: null,
    });
  });

  test('test the correct update when a user trigger a switch of theme', () => {
    render(<Store />);
    const { result } = renderHook(() => useReducer(reducer, initialState));

    act(() => {
      result.current[1]({ type: 'SWITCH_THEME' });
    });

    const state = result.current[0];

    expect(state).toStrictEqual({
      isDarkTheme: true,
      isLoggedIn: false,
      queryToSearch: 'wizeline',
      userData: null,
    });
  });

  test('test the correct update when a user trigger a log in', () => {
    render(<Store />);
    const { result } = renderHook(() => useReducer(reducer, initialState));

    act(() => {
      result.current[1]({
        type: 'LOGIN_SUCCESS',
        userData: {
          id: '123',
          name: 'Wizeline',
          avatarUrl:
            'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        },
      });
    });

    const state = result.current[0];

    expect(state).toStrictEqual({
      isDarkTheme: false,
      isLoggedIn: true,
      queryToSearch: 'wizeline',
      userData: {
        id: '123',
        name: 'Wizeline',
        avatarUrl:
          'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
      },
    });
  });

  test('test the correct update when a user trigger a log out', () => {
    render(<Store />);
    const { result } = renderHook(() => useReducer(reducer, initialState));

    act(() => {
      result.current[1]({
        type: 'LOGOUT',
      });
    });

    const state = result.current[0];

    expect(state).toStrictEqual({
      isDarkTheme: false,
      isLoggedIn: false,
      queryToSearch: 'wizeline',
      userData: null,
    });
  });
});

// Sigue sacar el dispatch [1] aplicarlo y testear

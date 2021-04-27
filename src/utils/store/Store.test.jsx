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

  test('update "queryToSearch" param in the state with dispatch', () => {
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
});

// Sigue sacar el dispatch [1] aplicarlo y testear

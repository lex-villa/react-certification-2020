import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/reducer';

const initialState = {
  queryToSearch: 'wizeline',
  isDarkTheme: false,
  isLoggedIn: false,
  userData: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);

export default Store;

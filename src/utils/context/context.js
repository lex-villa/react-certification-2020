import { createContext } from 'react';

export const Context = createContext({
  queryToSearch: null,
  setQueryFromSearchInput: null,
});

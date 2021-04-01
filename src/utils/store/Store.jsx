import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/reducer';

const initialState = {
  queryToSearch: 'goku vs jiren',
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export const Context = createContext(initialState);

export default Store;

// export const SearchQueryContext = createContext({
//   queryToSearch: null,
//   setQueryFromSearchInput: null,
// });

// export default (props) => {
//   const [queryFromSeacrhInput, setQueryFromSearchInput] = useState('Goku vs Jiren');
//   return (
//     <SearchQueryContext.Provider
//       value={{
//         queryToSearch: queryFromSeacrhInput,
//         setQueryFromSearchInput,
//       }}
//     >
//       {props.children}
//     </SearchQueryContext.Provider>
//   );
// };

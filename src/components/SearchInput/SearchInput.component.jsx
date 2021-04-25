import React, { useState, useContext } from 'react';

import { Form } from './SearchInput.styled';
import { Context } from '../../utils/store/Store';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [, dispatch] = useContext(Context);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE_QUERY_TO_SEARCH', queryToSearch: inputValue });
  };

  return (
    <Form data-testid="form" onSubmit={onSubmitHandler}>
      <div htmlFor="searchInput" onClick={onSubmitHandler} aria-hidden="true" />
      <input
        id="searchInput"
        aria-label="search-input"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Form>
  );
};

export default SearchInput;

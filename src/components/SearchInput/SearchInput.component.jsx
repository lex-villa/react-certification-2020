import React, { useState, useContext } from 'react';

import { Form } from './SearchInput.styled';
import { Context } from '../../utils/context/context';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const context = useContext(Context);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('estoy buscando...');
    context.setQueryFromSearchInput(inputValue);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <div htmlFor="searchInput" onClick={onSubmitHandler} aria-hidden="true" />
      <input
        id="searchInput"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Form>
  );
};

export default SearchInput;

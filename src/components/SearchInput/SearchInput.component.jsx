import React, { useState } from 'react';

import { Form } from './SearchInput.styled';

const SearchInput = ({ setQueryFromSearchInput }) => {
  const [inputValue, setInputValue] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('estoy buscando...');
    setQueryFromSearchInput(inputValue);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <div htmlFor="searchInput" />
      <input id="searchInput" type="text" placeholder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </Form>
  );
};

export default SearchInput;

import React from 'react';

import { Form } from './SearchInput.styled';

const SearchInput = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('estoy buscando...');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <div htmlFor="searchInput" />
      <input id="searchInput" type="text" placeholder="Search..." />
    </Form>
  );
};

export default SearchInput;

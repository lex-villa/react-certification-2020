import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  border: 2px solid purple;
  width: fit-content;
  height: 32px;
  display: flex;
  margin-top: 10px;
  margin-left: 16px;

  label {
    width: 30px;
    height: 28px;
    background: red;
		cursor: text;
  }

  input {
    width: 205px;
  }

  @media (min-width: 600px) {
    border: 2px solid purple;
    width: fit-content;
    height: 37px;
    display: flex;
    margin-top: 14px;
    margin-left: 50px;

    label {
      width: 30px;
      height: 33px;
      background: red;
    }
  }
`;

const SearchInput = () => {
	const onSubmitHandler = () => {
		console.log('estoy buscando...');
	};

	return (
		<Form onSubmit={onSubmitHandler}>
			<label htmlFor="searchInput">
				{/* <img src='https://svg-clipart.com/thumbs/white/ktmN7fh-search-icon-white-one-clipart.jpg' alt='search' /> */}
			</label>

			<input id="searchInput" type="text" placeholder="Search..." />
		</Form>
	);
};

export default SearchInput;

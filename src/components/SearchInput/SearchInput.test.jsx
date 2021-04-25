import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.component';
import Store from '../../utils/store/Store';

describe('<SearchInput />', () => {
  test('the value of the input is equal to the value written after the change event', () => {
    render(
      <Store>
        <SearchInput />
      </Store>
    );

    const form = screen.queryByTestId('form');
    const input = screen.getByLabelText('search-input');

    fireEvent.change(input, { target: { value: 'goku' } });
    fireEvent.submit(form);

    expect(input.value).toBe('goku');
  });
});

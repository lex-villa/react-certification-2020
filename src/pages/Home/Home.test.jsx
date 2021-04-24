import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';
import 'whatwg-fetch';
import Home from './Home.page';
import Store from '../../utils/store/Store';
import 'regenerator-runtime/runtime';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays image for each item from the server', async () => {
  const portalRoot = document.createElement('div');
  portalRoot.setAttribute('id', 'modal-hook');
  document.body.appendChild(portalRoot);

  const portalRootBackdrop = document.createElement('div');
  portalRootBackdrop.setAttribute('id', 'backdrop-hook');
  document.body.appendChild(portalRootBackdrop);

  render(
    <Store>
      <Home />
    </Store>
  );

  const resultImages = await screen.findAllByRole('img');
  expect(resultImages).toHaveLength(10);
});

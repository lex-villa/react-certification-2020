import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';
import 'whatwg-fetch';
import Home from './Home.page';
import Store from '../../utils/store/Store';
import 'regenerator-runtime/runtime';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders an image for each item reached from a search to youtube API', async () => {
  const portalModal = document.createElement('div');
  portalModal.setAttribute('id', 'modal-hook');
  document.body.appendChild(portalModal);

  const portalBackdrop = document.createElement('div');
  portalBackdrop.setAttribute('id', 'backdrop-hook');
  document.body.appendChild(portalBackdrop);

  render(
    <Store>
      <Home />
    </Store>
  );

  const resultImages = await screen.findAllByRole('img');
  expect(resultImages).toHaveLength(4);
});

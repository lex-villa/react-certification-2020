import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import Routing from 'react-router-dom';
import { handlers } from '../../mocks/handlers';
import 'whatwg-fetch';
import VideoDetails from './VideoDetails.component';
// import Store from '../../utils/store/Store';
import 'regenerator-runtime/runtime';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const { MemoryRouter } = jest.requireActual('react-router-dom');
jest.mock('react-router-dom');

describe('<VideoDetails />', () => {
  const videoId = '3-BRfzrUk1E';
  Routing.useParams = jest.fn().mockReturnValue({ videoId });
  Routing.useHistory = jest.fn().mockReturnValue({
    location: {
      pathname: '/',
    },
  });

  test('Render the section that shows the list of videos suggested related to the video clicked', () => {
    render(
      <MemoryRouter>
        <VideoDetails />
      </MemoryRouter>
    );

    const suggestedSection = screen.findByTestId('suggesstedSection');

    expect(suggestedSection).toBeTruthy();
  });
});

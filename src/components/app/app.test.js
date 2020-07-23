import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import moviesMocks from '../../mocks/test-films-mock.json';
import genresMocks from '../../mocks/test-genres-mock.json';

import App from './app.jsx';

const mockStore = configureStore([]);
const store = mockStore({
  genres: {
    list: genresMocks,
  },
  movies: {
    list: moviesMocks,
  }
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

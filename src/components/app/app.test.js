import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';
import filmsMock from '../../mocks/test-films-mock.json';
import genresMock from '../../mocks/test-genres-mock.json';


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movies={filmsMock.slice(10, 14)}
      genres={genresMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

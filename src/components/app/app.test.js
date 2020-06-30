import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';
import filmsMock from '../../mock/test-films-mock.json';
import genresMock from '../../mock/test-genres-mock.json';


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      moveDetails={filmsMock[11]}
      movies={filmsMock.slice(10, 14)}
      genres={genresMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

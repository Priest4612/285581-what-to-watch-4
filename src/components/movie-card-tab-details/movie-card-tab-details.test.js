import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';

import MovieCardTabDetail from './movie-card-tab-details.jsx';


it(`Render MovieCardTabDetail`, () => {
  const {director, starring, runTime, genre, released} = movies[1];

  const tree = renderer
    .create(<MovieCardTabDetail
      runTime={runTime}
      genre={genre}
      director={director}
      starring={starring}
      released={released}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';
import genres from '../../mocks/test-genres-mock.json';

import MovieCardTabReviews from './main.jsx';


it(`Render MovieCardTabReviews`, () => {

  const tree = renderer
    .create(<MovieCardTabReviews
      movies={movies}
      genres={genres}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

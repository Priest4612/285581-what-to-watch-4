import React from 'react';
import renderer from 'react-test-renderer';

import filmsMock from '../../mocks/test-films-mock.json';

import MovieCardFullRating from './movie-card-full-rating.jsx';


it(`Render MovieCardFullRating`, () => {
  const {rating, scoresCount} = filmsMock[2];
  const tree = renderer
    .create(<MovieCardFullRating
      rating={rating}
      scoresCount={scoresCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

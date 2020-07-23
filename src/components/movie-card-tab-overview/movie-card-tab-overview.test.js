import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';

import MovieCardTabReviews from './movie-card-tab-overview.jsx';


it(`Render MovieCardTabReviews`, () => {
  const {rating, scoresCount, director, starring, description} = movies[1];

  const tree = renderer
    .create(<MovieCardTabReviews
      rating={rating}
      scoresCount={scoresCount}
      director={director}
      starring={starring}
      description={description}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

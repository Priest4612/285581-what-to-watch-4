import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardTabReviews from './movie-card-tab-reviews.jsx';


it(`Render MovieCardTabReviews`, () => {
  const tree = renderer
    .create(<MovieCardTabReviews />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardHead from './movie-card-head';

it(`Render MovieCardHead`, () => {
  const tree = renderer
    .create(<MovieCardHead />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

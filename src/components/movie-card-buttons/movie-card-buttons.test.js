import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardButtons from './movie-card-buttons.jsx';

it(`Render MovieCardButtons`, () => {
  const tree = renderer
    .create(<MovieCardButtons />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';
import mock from '../../mocks/test-films-mock.json';


it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard
      moveDetails={mock[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

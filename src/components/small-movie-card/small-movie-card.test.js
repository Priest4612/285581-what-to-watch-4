import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card.jsx';
import mock from '../../mock/test-films-mock.json';

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie={mock[3]}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

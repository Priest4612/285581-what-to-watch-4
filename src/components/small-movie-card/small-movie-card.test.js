import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card.jsx';
import mock from '../../mocks/test-films-mock.json';

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie={mock[3]}
      onClickCard={() => {}}
      onMouseEnterCard={() => {}}
      onMouseLeaveCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

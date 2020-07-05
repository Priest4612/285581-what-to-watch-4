import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardFullInfo from './movie-card-full-info.jsx';


import filmsMock from '../../mocks/test-films-mock.json';


it(`Render MovieCardFullInfo`, () => {
  const {
    name, posterImage, description, rating, scoresCount,
    director, starring,
  } = filmsMock[1];
  const tree = renderer
    .create(<MovieCardFullInfo
      name={name}
      posterImage={posterImage}
      description={description}
      rating={rating}
      scoresCount={scoresCount}
      director={director}
      starring={starring}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

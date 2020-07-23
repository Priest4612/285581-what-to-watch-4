import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';
import {ViewMode} from '../../constants';

import MovieCard from './movie-card.jsx';


it(`Render MovieCard -- MAIN`, () => {
  const avatarImg = `img/avatar.jpg`;

  const tree = renderer
    .create(<MovieCard
      viewMode={ViewMode.MAIN}
      avatarImg={avatarImg}
      movieDetails={movies[5]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render MovieCard -- FULL`, () => {
  const avatarImg = `img/avatar.jpg`;

  const tree = renderer
    .create(<MovieCard
      viewMode={ViewMode.FULL}
      avatarImg={avatarImg}
      movieDetails={movies[5]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

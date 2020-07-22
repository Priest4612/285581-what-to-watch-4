import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';

import MovieCardDesc from './movie-card-desc.jsx';


it(`Render MovieCardDesc -- full`, () => {
  const {name, genre, released} = movies[1];

  const tree = renderer
    .create(<MovieCardDesc
      name={name}
      genre={genre}
      released={released}
      isFull={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render MovieCardDesc -- main`, () => {
  const {name, genre, released} = movies[2];

  const tree = renderer
    .create(<MovieCardDesc
      name={name}
      genre={genre}
      released={released}
      isFull={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

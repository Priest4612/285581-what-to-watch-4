import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardDesc from './movie-card-desc.jsx';

import filmsMock from '../../mocks/test-films-mock.json';


it(`Render MovieCardDesc`, () => {
  const {name, genre, released} = filmsMock[0];
  const tree = renderer
    .create(<MovieCardDesc
      name={name}
      genre={genre}
      released={released}
    >
      <a>la-la-la</a>
    </MovieCardDesc>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardInfo from './movie-card-info.jsx';
import mock from '../../mocks/test-films-mock.json';

const {name, posterImage, genre, released} = mock[1];

it(`Render MovieCardInfo`, () => {
  const tree = renderer
    .create(<MovieCardInfo
      name={name}
      genre={genre}
      released={released}
      posterImage={posterImage}
      elemButton={<a>la-la-la</a>}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

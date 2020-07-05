import React from 'react';
import renderer from 'react-test-renderer';

import filmsMock from '../../mocks/test-films-mock.json';

import MovieCardFullPoster from './movie-card-full-poster.jsx';


it(`Render MovieCardFullPoster`, () => {
  const {name, posterImage} = filmsMock[2];
  const tree = renderer
    .create(<MovieCardFullPoster
      name={name}
      posterImage={posterImage}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

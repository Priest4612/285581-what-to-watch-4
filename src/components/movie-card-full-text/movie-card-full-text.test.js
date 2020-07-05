import React from 'react';
import renderer from 'react-test-renderer';

import filmsMock from '../../mocks/test-films-mock.json';

import MovieCardFullText from './movie-card-full-text.jsx';


it(`Render MovieCardFullText`, () => {
  const {director, starring, description} = filmsMock[2];
  const tree = renderer
    .create(<MovieCardFullText
      director={director}
      starring={starring}
      description={description}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

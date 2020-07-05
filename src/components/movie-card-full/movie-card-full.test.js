import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardFull from './movie-card-full.jsx';


import filmsMock from '../../mocks/test-films-mock.json';


it(`Render MovieCardFull`, () => {
  const tree = renderer
    .create(<MovieCardFull
      moveDetails={filmsMock[0]}
      movies={filmsMock}
      onClickCard={() => {}}
      onMouseEnterCard={() => {}}
      onMouseLeaveCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

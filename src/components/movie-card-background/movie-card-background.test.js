import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardBackground from './movie-card-background.jsx';
import mock from '../../mock/test-films-mock.json';

const {backgroundImage} = mock[2];

it(`Render MovieCardBackground`, () => {
  const tree = renderer
    .create(<MovieCardBackground
      backgroundImage={backgroundImage}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

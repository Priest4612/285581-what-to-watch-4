import React from 'react';
import renderer from 'react-test-renderer';

import UserBlockLink from './user-block-link.jsx';


it(`Render UserBlockLink`, () => {
  const tree = renderer
    .create(<UserBlockLink />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

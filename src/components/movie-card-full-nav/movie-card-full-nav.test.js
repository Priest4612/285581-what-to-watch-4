import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardFullNav from './movie-card-full-nav.jsx';


it(`Render MovieCardFullNav`, () => {
  const tree = renderer
    .create(<MovieCardFullNav
      onClickNavItem={() => {}}
      activNav={`Details`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

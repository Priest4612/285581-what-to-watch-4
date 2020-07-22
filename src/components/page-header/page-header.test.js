import React from 'react';
import renderer from 'react-test-renderer';

import PageHeader from './page-header.jsx';

const avatarImg = `img/avatar.jpg`;

it(`Render PageHeader`, () => {
  const tree = renderer
    .create(<PageHeader
      avatarImg={avatarImg}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import UserBlock from './user-block.jsx';

const avatarImg = `img/avatar.jpg`;

it(`Render UserBlock`, () => {
  const tree = renderer
    .create(<UserBlock
      avatarImg={avatarImg}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

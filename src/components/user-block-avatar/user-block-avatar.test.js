import React from 'react';
import renderer from 'react-test-renderer';

import UserBlockAvatar from './user-block-avatar.jsx';

const avatarImg = `img/avatar.jpg`;

it(`Render UserBlockAvatar`, () => {
  const tree = renderer
    .create(<UserBlockAvatar
      avatarImg={avatarImg}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

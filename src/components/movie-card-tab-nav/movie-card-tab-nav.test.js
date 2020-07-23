import React from 'react';
import renderer from 'react-test-renderer';

import {tabList} from '../../constants';

import MovieCardTabNav from './movie-card-tab-nav.jsx';


it(`Render MovieCardTabNav`, () => {
  const tree = renderer
    .create(<MovieCardTabNav
      activeTab={tabList.OVERVIEW}
      onClickTabs={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import CatalogButtonShowMore from './catalog-button-show-more.jsx';


it(`Render CatalogButtonShowMore`, () => {
  const tree = renderer
    .create(<CatalogButtonShowMore />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

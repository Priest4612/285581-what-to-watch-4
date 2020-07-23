import React from 'react';
import renderer from 'react-test-renderer';

import PageContentFooter from './page-content-footer.jsx';


it(`Render PageContentFooter`, () => {
  const tree = renderer
    .create(<PageContentFooter />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

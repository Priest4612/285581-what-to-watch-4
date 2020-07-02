import React from 'react';
import renderer from 'react-test-renderer';

import CatalogGenresItem from './catalog-genres-item.jsx';
import genresMock from '../../mocks/test-genres-mock.json';


it(`Render CatalogGenresItem`, () => {
  const tree = renderer
    .create(<CatalogGenresItem
      genre={genresMock[2]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

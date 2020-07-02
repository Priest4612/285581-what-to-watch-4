import React from 'react';
import renderer from 'react-test-renderer';

import CatalogGenres from './catalog-genres';
import genresMock from '../../mocks/test-genres-mock.json';


it(`Render CatalogGenres`, () => {
  const tree = renderer
    .create(<CatalogGenres
      genres={genresMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

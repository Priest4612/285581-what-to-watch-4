import React from 'react';
import renderer from 'react-test-renderer';

import CatalogMovies from './catalog-movies.jsx';
import mock from '../../mock/test-films-mock.json';


it(`Render CatalogMovies`, () => {
  const tree = renderer
    .create(<CatalogMovies
      movies={mock.splice(3, 7)}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

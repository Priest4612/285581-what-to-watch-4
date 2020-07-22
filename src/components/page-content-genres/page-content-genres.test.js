import React from 'react';
import renderer from 'react-test-renderer';

import genres from '../../mocks/test-genres-mock.json';

import PageContentGenres from './page-content-genres.jsx';


it(`Render PageContentGenres`, () => {
  const tree = renderer
    .create(<PageContentGenres
      onClickGenreItem={() => {}}
      activeGenre={genres[0].name}
      genres={genres}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';

import PageContentMovies from './page-content-movies.jsx';


it(`Render PageContentMovies`, () => {
  const tree = renderer
    .create(<PageContentMovies
      onClickCard={() => {}}
      onMouseEnterCard={() => {}}
      onMouseLeaveCard={() => {}}
      movies={movies}
      activeCardId={0}
      isPlaying={false}
      isMuted={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

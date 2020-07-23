import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/test-films-mock.json';
import genres from '../../mocks/test-genres-mock.json';
import {ViewMode} from '../../constants';

import PageContent from './page-content.jsx';


it(`Render PageContent -- ViewMode.MAIN`, () => {
  const tree = renderer
    .create(<PageContent
      onClickCard={() => {}}
      onMouseEnterCard={() => {}}
      onMouseLeaveCard={() => {}}
      onClickGenreItem={() => {}}
      movieDetails={movies[0]}
      viewMode={ViewMode.MAIN}
      genres={genres}
      movies={movies}
      isMuted={true}
      isPlaying={false}
      activeCardId={2}
      activeGenre={genres[3].name}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render PageContent  -- ViewMode.FULL`, () => {
  const tree = renderer
    .create(<PageContent
      onClickCard={() => {}}
      onMouseEnterCard={() => {}}
      onMouseLeaveCard={() => {}}
      onClickGenreItem={() => {}}
      movieDetails={movies[0]}
      viewMode={ViewMode.FULL}
      genres={genres}
      movies={movies}
      isMuted={true}
      isPlaying={false}
      activeCardId={2}
      activeGenre={genres[3].name}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import {tabList} from '../../constants';
import movies from '../../mocks/test-films-mock.json';

import MovieCardTabs from './movie-card-tabs.jsx';


it(`Render MovieCardTabs -- DETAILS`, () => {
  const {rating, scoresCount, director, starring, description, runTime, genre, released} = movies[0];
  const tree = renderer
    .create(<MovieCardTabs
      activeTab={tabList.DETAILS}
      rating={rating}
      scoresCount={scoresCount}
      director={director}
      starring={starring}
      description={description}
      runTime={runTime}
      genre={genre}
      released={released}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render MovieCardTabs -- OVERVIEW`, () => {
  const {rating, scoresCount, director, starring, description, runTime, genre, released} = movies[2];
  const tree = renderer
    .create(<MovieCardTabs
      activeTab={tabList.DETAILS}
      rating={rating}
      scoresCount={scoresCount}
      director={director}
      starring={starring}
      description={description}
      runTime={runTime}
      genre={genre}
      released={released}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render MovieCardTabs -- REVIEWS`, () => {
  const {rating, scoresCount, director, starring, description, runTime, genre, released} = movies[2];
  const tree = renderer
    .create(<MovieCardTabs
      activeTab={tabList.DETAILS}
      rating={rating}
      scoresCount={scoresCount}
      director={director}
      starring={starring}
      description={description}
      runTime={runTime}
      genre={genre}
      released={released}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

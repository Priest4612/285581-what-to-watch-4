import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';
import filmsMock from '../../mock/test-films-mock.json';
import genresMock from '../../mock/test-genres-mock.json';


it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      moveDetails={filmsMock[0]}
      movies={filmsMock.slice(0, 4)}
      genres={genresMock}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

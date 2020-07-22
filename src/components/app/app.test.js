import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';
import genresMock from '../../mocks/test-genres-mock.json';


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      genres={genresMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

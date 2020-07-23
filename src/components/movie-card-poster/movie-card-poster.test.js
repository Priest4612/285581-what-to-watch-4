import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardPoster from './movie-card-poster.jsx';


it(`Render MovieCardPoster -- full`, () => {
  const tree = renderer
    .create(<MovieCardPoster
      name={`name-poster`}
      posterImage={`posterImage`}
      isFull={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render MovieCardPoster  -- main`, () => {
  const tree = renderer
    .create(<MovieCardPoster
      name={`name-poster`}
      posterImage={`posterImage`}
      isFull={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

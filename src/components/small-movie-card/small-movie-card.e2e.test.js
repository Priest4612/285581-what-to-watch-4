import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

import mock from '../../mocks/test-films-mock.json';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Checks that when you hover over the card with the movie, the movie information gets to the handler`, () => {
  const onMouseEnterCard = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        movie={mock[2]}
        onMouseEnterCard={onMouseEnterCard}
      />
  );

  const movieCardElement = movieCard.find(`article.small-movie-card`);
  movieCardElement.simulate(`mouseenter`);

  expect(onMouseEnterCard).toHaveBeenCalledWith(mock[2].name);
});

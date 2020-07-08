import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

import mock from '../../mocks/test-films-mock.json';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Checks that when you hover over the card with the movie, the movie information gets to the handler`, () => {
  const onClickCard = jest.fn();
  const onMouseEnterCard = jest.fn();
  const onMouseLeaveCard = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        movie={mock[2]}
        onClickCard={onClickCard}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
        activeMovieId={mock[3].id}
        isMuted={true}
        isPlaying={true}
      />
  );

  const movieCardElement = movieCard.find(`article.small-movie-card`);
  movieCardElement.simulate(`click`);
  movieCardElement.simulate(`mouseenter`);
  movieCardElement.simulate(`mouseleave`);


  expect(onClickCard).toHaveBeenCalledWith(mock[2].id);
  expect(onMouseEnterCard).toHaveBeenCalledWith(mock[2].id);
  expect(onMouseLeaveCard).toHaveBeenCalledTimes(1);
});

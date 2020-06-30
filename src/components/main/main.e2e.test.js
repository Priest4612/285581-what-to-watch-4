import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';
import filmsMock from '../../mock/test-films-mock.json';
import genresMock from '../../mock/test-genres-mock.json';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        moveDetails={filmsMock[0]}
        movies={filmsMock.slice(0, 4)}
        genres={genresMock}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const titleLinks = main.find(`a.small-movie-card__link`);
  titleLinks.forEach((item) => item.simulate(`click`));

  expect(onCardTitleClick).toHaveBeenCalledTimes(titleLinks.length);
});

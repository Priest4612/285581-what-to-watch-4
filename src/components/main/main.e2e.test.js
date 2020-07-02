import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';
import filmsMock from '../../mocks/test-films-mock.json';
import genresMock from '../../mocks/test-genres-mock.json';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onMouseEnterCard = jest.fn();

  const main = shallow(
      <Main
        moveDetails={filmsMock[0]}
        movies={filmsMock.slice(0, 4)}
        genres={genresMock}
        onMouseEnterCard={onMouseEnterCard}
      />
  );

  const titleLinks = main.find(`a.small-movie-card__link`);
  titleLinks.forEach((item) => item.simulate(`click`));

  expect(onMouseEnterCard).toHaveBeenCalledTimes(titleLinks.length);
});

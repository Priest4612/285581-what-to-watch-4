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
  const onClickCard = jest.fn();
  const onMouseEnterCard = jest.fn();
  const onMouseLeaveCard = jest.fn();


  const main = shallow(
      <Main
        moveDetails={filmsMock[0]}
        movies={filmsMock.slice(0, 4)}
        genres={genresMock}
        onClickCard={onClickCard}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
  );

  const titleLinks = main.find(`article.small-movie-card catalog__movies-card`);
  titleLinks.forEach((item) => item.simulate(`click`));

  expect(onClickCard).toHaveBeenCalledTimes(titleLinks.length);
  expect(onMouseEnterCard).toHaveBeenCalledTimes(titleLinks.length);
  expect(onMouseLeaveCard).toHaveBeenCalledTimes(titleLinks.length);
});

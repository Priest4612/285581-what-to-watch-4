import React from 'react';
import PropTypes from 'prop-types';

import {tabList} from '../../constants';

const MovieCardTabNav = (props) => {
  const {activeTab, onClickTabs} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.keys(tabList).map((key) =>
          <li
            key={tabList[key]}
            onClick={() => onClickTabs(tabList[key])}
            className={
              `movie-nav__item
              ${(activeTab === tabList[key]) && `movie-nav__item--active`}`
            }
          >
            <a href="#" className="movie-nav__link">{tabList[key]}</a>
          </li>
        )}
      </ul>
    </nav>
  );
};


MovieCardTabNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onClickTabs: PropTypes.func.isRequired,
};

export default MovieCardTabNav;

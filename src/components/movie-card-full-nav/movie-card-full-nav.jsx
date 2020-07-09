import React from 'react';
import PropTypes from 'prop-types';

const links = [
  `Overview`,
  `Details`,
  `Reviews`
];


const MovieCardFullNav = (props) => {
  const {activNav, onClickNavItem} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {links.map((link, index) =>
          <li
            key={index}
            onClick={() => onClickNavItem(link)}
            className={`movie-nav__item ${(activNav === link) && `movie-nav__item--active`}`}
          >
            <a href="#" className="movie-nav__link">{link}</a>
          </li>
        )}
      </ul>
    </nav>
  );
};


MovieCardFullNav.propTypes = {
  activNav: PropTypes.string.isRequired,
  onClickNavItem: PropTypes.func.isRequired,
};


export default MovieCardFullNav;

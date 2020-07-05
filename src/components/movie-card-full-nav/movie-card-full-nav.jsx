import React from 'react';

const links = [
  {id: 0, name: `Overview`, active: true},
  {id: 1, name: `Details`, active: false},
  {id: 2, name: `Reviews`, active: false}
];

const MovieCardFullNav = () => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {links.map((link) =>
          <li
            key={link.id}
            className={`movie-nav__item ${link.active && `movie-nav__item--active`}`}
          >
            <a href="#" className="movie-nav__link">{link.name}</a>
          </li>)}
      </ul>
    </nav>
  );
};

export default MovieCardFullNav;

import React from 'react';
import PropTypes from 'prop-types';


const PageContentGenres = (props) => {
  const {genres, activeGenre, onClickGenreItem} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          <li
            key={genre.id}
            onClick={() => onClickGenreItem(genre.name)}
            className={`catalog__genres-item
            ${(activeGenre === genre.name) && `catalog__genres-item--active`}`}
          >
            <a href="#" className="catalog__genres-link">
              {genre.name[0].toUpperCase() + genre.name.slice(1)}
            </a>
          </li>
        )
      }
    </ul>
  );
};


PageContentGenres.propTypes = {
  onClickGenreItem: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default PageContentGenres;

import React from 'react';
import PropTypes from 'prop-types';

import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';

const MovieCardInfo = (props) => {
  const {name, posterImage, genre, released} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <MovieCardButtons />
        </div>
      </div>
    </div>
  );
};

MovieCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default MovieCardInfo;

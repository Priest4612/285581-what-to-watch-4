import React from 'react';
import PropTypes from 'prop-types';

import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';

const MovieCardInfo = (props) => {
  const {name, posterImage, genre, released, elemButton} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
        <MovieCardDesc
          name={name}
          genre={genre}
          released={released}
          elemButton={elemButton}
        />
      </div>
    </div>
  );
};

MovieCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  elemButton: PropTypes.node,
};

export default MovieCardInfo;

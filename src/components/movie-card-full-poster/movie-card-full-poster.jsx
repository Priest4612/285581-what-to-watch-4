import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullPoster = (props) => {
  const {name, posterImage} = props;

  return (
    <div className="movie-card__poster movie-card__poster--big">
      <img src={posterImage} alt={name} width="218" height="327" />
    </div>
  );
};

MovieCardFullPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default MovieCardFullPoster;

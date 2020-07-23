import React from 'react';
import PropTypes from 'prop-types';

const MovieCardPoster = (props) => {
  const {name, posterImage, isFull} = props;

  return (
    <div
      className={
        `movie-card__poster
        ${isFull && `movie-card__poster--big`}`
      }
    >
      <img src={posterImage} alt={name} width="218" height="327" />
    </div>
  );
};


MovieCardPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  isFull: PropTypes.bool.isRequired,
};

export default MovieCardPoster;

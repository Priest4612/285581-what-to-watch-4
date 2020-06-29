import React from 'react';
import PropTypes from 'prop-types';

import MovieCardHead from '../movie-card-head/movie-card-head.jsx';
import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';
import MovieCardInfo from '../movie-card-info/movie-card-info.jsx';


const MovieCard = (props) => {
  const {name, genre, released, posterImage, backgroundImage} = props.moveDetails;
  return (
    <section className="movie-card">
      <MovieCardBackground backgroundImage={backgroundImage} />

      <MovieCardHead />

      <MovieCardInfo
        name={name}
        genre={genre}
        released={released}
        posterImage={posterImage}
      />
    </section >
  );
};

MovieCard.propTypes = {
  moveDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }),
};

export default MovieCard;

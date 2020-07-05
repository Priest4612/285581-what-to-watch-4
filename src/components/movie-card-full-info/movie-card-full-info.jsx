import React from 'react';
import PropTypes from 'prop-types';

import MovieCardFullPoster from '../movie-card-full-poster/movie-card-full-poster.jsx';
import MovieCardFullNav from '../movie-card-full-nav/movie-card-full-nav.jsx';
import MovieCardFullRating from '../movie-card-full-rating/movie-card-full-rating.jsx';
import MovieCardFullText from '../movie-card-full-text/movie-card-full-text.jsx';


const MovieCardFullInfo = (props) => {
  const {
    name, posterImage, description, rating, scoresCount, director, starring,
  } = props;

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <MovieCardFullPoster
          name={name}
          posterImage={posterImage}
        />

        <div className="movie-card__desc">
          <MovieCardFullNav />

          <MovieCardFullRating
            rating={rating}
            scoresCount={scoresCount}
          />

          <MovieCardFullText
            description={description}
            director={director}
            starring={starring}
          />
        </div>
      </div>
    </div>


  );
};


MovieCardFullInfo.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
};

export default MovieCardFullInfo;

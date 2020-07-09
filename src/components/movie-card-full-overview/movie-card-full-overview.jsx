import React from 'react';
import PropTypes from 'prop-types';

import MovieCardFullRating from '../movie-card-full-rating/movie-card-full-rating.jsx';
import MovieCardFullText from '../movie-card-full-text/movie-card-full-text.jsx';


const MovieCardFullOverview = (props) => {
  const {description, rating, scoresCount, director, starring,
  } = props;

  return (
    <React.Fragment>

      <MovieCardFullRating
        rating={rating}
        scoresCount={scoresCount}
      />

      <MovieCardFullText
        description={description}
        director={director}
        starring={starring}
      />

    </React.Fragment>
  );
};


MovieCardFullOverview.propTypes = {
  description: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
};


export default MovieCardFullOverview;

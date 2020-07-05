import React from 'react';
import PropTypes from 'prop-types';

import {FilmRating} from '../../constant.js';

const translateRatingToText = (ratingStr) => {
  const rating = Number.parseFloat(ratingStr, 10);
  let textRating = null;

  switch (true) {
    case (rating <= FilmRating.BAD.RATING.MAX):
      textRating = FilmRating.BAD.NAME;
      break;
    case (rating <= FilmRating.NORMAL.RATING.MAX):
      textRating = FilmRating.NORMAL.NAME;
      break;
    case (rating <= FilmRating.GOOD.RATING.MAX):
      textRating = FilmRating.GOOD.NAME;
      break;
    case (rating <= FilmRating.VERY_GOOD.RATING.MAX):
      textRating = FilmRating.VERY_GOOD.NAME;
      break;
    case (rating === FilmRating.AWESOME.RATING.MAX):
      textRating = FilmRating.AWESOME.NAME;
      break;

    default:
      textRating = `NOT FOUND`;
  }

  return textRating;
};


const MovieCardFullRating = (props) => {
  const {rating, scoresCount} = props;

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{translateRatingToText(rating)}</span>
        <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
      </p>
    </div>

  );
};

MovieCardFullRating.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
};

export default MovieCardFullRating;

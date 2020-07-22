import React from 'react';
import PropTypes from 'prop-types';

import {convertingRatingToLevel} from '../../utils';


const MovieCardTabOverview = (props) => {
  const {rating, scoresCount, director, starring, description} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertingRatingToLevel(rating)}</span>
          <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>


      <div className="movie-card__text">
        {description.map((sentence, index) => <p key={index}>{sentence}</p>)}

        <p className="movie-card__director">
          <strong>{`Director: ${director}`}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>{`Starring: ${starring.join(`, `)}`}</strong>
        </p>
      </div>
    </React.Fragment >
  );
};


MovieCardTabOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
};


export default MovieCardTabOverview;

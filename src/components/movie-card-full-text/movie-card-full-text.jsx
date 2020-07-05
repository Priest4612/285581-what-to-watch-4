import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullText = (props) => {
  const {director, starring, description} = props;

  return (
    <div className="movie-card__text">
      {description.map((sentence, index) => <p key={index}>{sentence}</p>)}

      <p className="movie-card__director">
        <strong>{`Director: ${director}`}</strong>
      </p>

      <p className="movie-card__starring">
        <strong>{`Starring: ${starring.join(`, `)}`}</strong>
      </p>
    </div>

  );
};

MovieCardFullText.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
};

export default MovieCardFullText;

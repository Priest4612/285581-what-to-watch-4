import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBackground = (props) => {
  const {backgroundImage} = props;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt="The Grand Budapest Hotel" />
    </div>
  );
};

MovieCardBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default MovieCardBackground;

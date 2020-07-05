import React from 'react';
import PropTypes from 'prop-types';

import {splitSeparator} from '../../utils/uitls.js';

const MovieCardBackground = (props) => {
  const {backgroundImage} = props;

  const backgroundImageName = splitSeparator(backgroundImage);

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={backgroundImageName} />
    </div>
  );
};

MovieCardBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default MovieCardBackground;

import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBackground = (props) => {
  const {backgroundImage} = props;

  const splitSeparator = (stringToSplit) => {
    const arrayOfStrings = stringToSplit.split(`/`);
    const fileName = arrayOfStrings[arrayOfStrings.length - 1];
    const file = {
      name: fileName.split(`.`)[0],
      type: fileName.split(`.`)[1],
    };
    const fileOfStrings = file.name.split(`-`);
    const arrayOfStringsToUpper = fileOfStrings.map((string) => string.split(/\s+/).map((word) => word[0].toUpperCase() + word.substring(1)).join(` `));

    return arrayOfStringsToUpper.join(` `);
  };

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

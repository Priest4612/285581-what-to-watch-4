import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const handleMouseEnterCard = (name) => {
  return name;
};

const App = (props) => {
  const {moveDetails, movies, genres} = props;
  return (
    <Main
      moveDetails={moveDetails}
      movies={movies}
      genres={genres}
      onMouseEnterCard={handleMouseEnterCard}
    />
  );
};


App.propTypes = {
  moveDetails: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default App;

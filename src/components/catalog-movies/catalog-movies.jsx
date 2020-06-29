import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const CatalogMovies = (props) => {
  const {movies} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => <SmallMovieCard key={movie.id} movie={movie} />)}
      </div>
    </React.Fragment>
  );
};

CatalogMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default CatalogMovies;

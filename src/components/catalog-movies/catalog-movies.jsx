import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const CatalogMovies = (props) => {
  const {movies, onMouseEnterCard} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => <SmallMovieCard
          key={movie.id}
          movie={movie}
          onMouseEnterCard={onMouseEnterCard}
        />)}
      </div>
    </React.Fragment>
  );
};

CatalogMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
};

export default CatalogMovies;

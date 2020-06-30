import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const CatalogMovies = (props) => {
  const {movies, onCardTitleClick} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => <SmallMovieCard
          key={movie.id}
          movie={movie}
          onCardTitleClick={onCardTitleClick}
        />)}
      </div>
    </React.Fragment>
  );
};

CatalogMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default CatalogMovies;

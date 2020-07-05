import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const CatalogMovies = (props) => {
  const {movies, onClickCard, onMouseEnterCard, onMouseLeaveCard} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => <SmallMovieCard
          key={movie.id}
          movie={movie}
          onClickCard={onClickCard}
          onMouseEnterCard={onMouseEnterCard}
          onMouseLeaveCard={onMouseLeaveCard}
        />)}
      </div>
    </React.Fragment>
  );
};

CatalogMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onClickCard: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
};

export default CatalogMovies;

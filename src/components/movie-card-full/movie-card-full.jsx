import React from 'react';
import PropTypes from 'prop-types';

import {filterArrayObjects} from '../../utils/uitls.js';

import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';
import MovieCardHead from '../movie-card-head/movie-card-head.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';
import CatalogMovies from '../catalog-movies/catalog-movies.jsx';
import MovieCardFullInfo from '../movie-card-full-info/movie-card-full-info.jsx';


const MovieCardFull = (props) => {
  const {movies, moveDetails, onClickCard, onMouseEnterCard, onMouseLeaveCard} = props;
  const {
    backgroundImage, name, posterImage, genre,
    released, description, rating, scoresCount,
    director, starring,
  } = moveDetails;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBackground
            backgroundImage={backgroundImage}
          />

          <MovieCardHead />

          <div className="movie-card__wrap">
            <MovieCardDesc
              name={name}
              genre={genre}
              released={released}
              elemButton={<a href="add-review.html" className="btn movie-card__button">Add review</a>}
            />
          </div>
        </div>

        <MovieCardFullInfo
          name={name}
          posterImage={posterImage}
          description={description}
          rating={rating}
          scoresCount={scoresCount}
          director={director}
          starring={starring}
        />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogMovies
            movies={filterArrayObjects(movies, `genre`, genre).slice(0, 4)}
            onClickCard={onClickCard}
            onMouseEnterCard={onMouseEnterCard}
            onMouseLeaveCard={onMouseLeaveCard}
          />
        </section>

        <PageFooter />

      </div>

    </React.Fragment>

  );
};

MovieCardFull.propTypes = {
  moveDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  movies: PropTypes.array.isRequired,
  onClickCard: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
};

export default MovieCardFull;

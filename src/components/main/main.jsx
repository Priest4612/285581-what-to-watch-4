import React from 'react';
import PropTypes from 'prop-types';

import CatalogMovies from '../catalog-movies/catalog-movies.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import CatalogGenres from '../catalog-genres/catalog-genres.jsx';
import CatalogButtonShowMore from '../catalog-button-show-more/catalog-button-show-more.jsx';

const Main = (props) => {
  const {movies, moveDetails, genres, onClickCard} = props;

  return (
    <React.Fragment>
      <MovieCard moveDetails={moveDetails} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenres
            genres={genres}
          />

          <CatalogMovies
            movies={movies}
            onClickCard={onClickCard}
          />

          <CatalogButtonShowMore />
        </section>

        <PageFooter />

      </div>
    </React.Fragment >
  );
};


Main.propTypes = {
  moveDetails: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default Main;

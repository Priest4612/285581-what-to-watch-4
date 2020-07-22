import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ViewMode} from '../../constants';
import {filterArrayObjects} from '../../utils';

import PageContentGenres from '../page-content-genres/page-content-genres.jsx';
import PageContentMovies from '../page-content-movies/page-content-movies.jsx';
import PageContentFooter from '../page-content-footer/page-content-footer.jsx';


class PageContent extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderPageContent() {
    const {
      genres, movies,
      onClickCard, onMouseEnterCard, onMouseLeaveCard, onClickGenreItem,
      activeGenre,
      movieDetails, viewMode,
      activeCardId, isMuted, isPlaying
    } = this.props;
    const activeMovieGenre = movieDetails.genre;

    switch (viewMode) {
      case ViewMode.MAIN:
        return (
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <PageContentGenres
              onClickGenreItem={onClickGenreItem}
              activeGenre={activeGenre}
              genres={genres}
            />
            <PageContentMovies
              onClickCard={onClickCard}
              onMouseEnterCard={onMouseEnterCard}
              onMouseLeaveCard={onMouseLeaveCard}
              movies={
                (activeGenre === genres[0].name)
                  ? movies
                  : filterArrayObjects(movies, `genre`, activeGenre)
              }
              isMuted={isMuted}
              isPlaying={isPlaying}
              activeCardId={activeCardId}
            />
            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>
        );
      case ViewMode.FULL:
        return (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <PageContentMovies
              onClickCard={onClickCard}
              onMouseEnterCard={onMouseEnterCard}
              onMouseLeaveCard={onMouseLeaveCard}
              movies={
                filterArrayObjects(movies, `genre`, activeMovieGenre)
                  .filter((movie) => movie.id !== movieDetails.id)
                  .slice(0, 4)
              }
              isMuted={isMuted}
              isPlaying={isPlaying}
              activeCardId={activeCardId}
            />
          </section>
        );
    }

    return null;
  }

  render() {
    return (
      <div className="page-content">
        {this._renderPageContent()}
        <PageContentFooter />
      </div>
    );
  }
}


PageContent.propTypes = {
  onClickCard: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onClickGenreItem: PropTypes.func.isRequired,
  movieDetails: PropTypes.object,
  viewMode: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  activeCardId: PropTypes.number,
  activeGenre: PropTypes.string.isRequired,
};

export default PageContent;

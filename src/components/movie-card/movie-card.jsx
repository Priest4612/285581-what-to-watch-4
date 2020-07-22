import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ViewMode} from '../../constants';

import PageHeader from '../page-header/page-header.jsx';
import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';
import MovieCardPoster from '../movie-card-poster/movie-card-poster.jsx';
import MovieCardTabs from '../movie-card-tabs/movie-card-tabs.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMovieCard() {
    const {viewMode, avatarImg, movieDetails} = this.props;
    const {name, genre, released, backgroundImage, posterImage, rating, scoresCount, director, starring, description, runTime} = movieDetails;
    let isFull = false;

    switch (viewMode) {
      case ViewMode.MAIN:
        isFull = false;

        return (
          <section className="movie-card">
            <MovieCardBackground
              backgroundImage={backgroundImage}
            />
            <PageHeader
              avatarImg={avatarImg}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__info">

                <MovieCardPoster
                  name={name}
                  posterImage={posterImage}
                  isFull={isFull}
                />

                <MovieCardDesc
                  name={name}
                  genre={genre}
                  released={released}
                  isFull={isFull}
                />
              </div>
            </div>
          </section>
        );

      case ViewMode.FULL:
        isFull = true;

        return (
          <section className="movie-card movie-card--full">
            <div className="movie-card__hero">
              <MovieCardBackground
                backgroundImage={backgroundImage}
              />
              <PageHeader
                avatarImg={avatarImg}
              />

              <div className="movie-card__wrap">
                <MovieCardDesc
                  name={name}
                  genre={genre}
                  released={released}
                  isFull={isFull}
                />
              </div>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">

                <MovieCardPoster
                  name={name}
                  posterImage={posterImage}
                  isFull={isFull}
                />

                <MovieCardTabs
                  rating={rating}
                  scoresCount={scoresCount}
                  director={director}
                  starring={starring}
                  description={description}
                  runTime={runTime}
                  genre={genre}
                  released={released}
                />
              </div>
            </div>
          </section>
        );
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        {this._renderMovieCard()}
      </React.Fragment>
    );
  }
}


MovieCard.propTypes = {
  viewMode: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  movieDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
  }),
};

export default MovieCard;

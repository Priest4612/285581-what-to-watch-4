import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCardFullPoster from '../movie-card-full-poster/movie-card-full-poster.jsx';
import MovieCardFullNav from '../movie-card-full-nav/movie-card-full-nav.jsx';
import MovieCardFullOverview from '../movie-card-full-overview/movie-card-full-overview.jsx';
import MovieCardFullReviews from '../movie-card-full-reviews/movie-card-full-reviews.jsx';
import MovieCardFullDetails from '../movie-card-full-details/movie-card-full-details.jsx';

const ViewMode = {
  OVERVIEW: `Overview`,
  REVIEWS: `Reviews`,
  DETAILS: `Details`
};


class MovieCardFullInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: ViewMode.OVERVIEW,
    };

    this._handleClickNavItem = this._handleClickNavItem.bind(this);
  }

  _handleClickNavItem(activNav) {
    this.setState(() => ({
      viewMode: activNav,
    }));
  }

  _renderCardDesc() {
    const {description, rating, scoresCount, director, starring, runTime, genre, released} = this.props;

    switch (this.state.viewMode) {
      case ViewMode.OVERVIEW:
        return (
          <MovieCardFullOverview
            rating={rating}
            scoresCount={scoresCount}
            description={description}
            director={director}
            starring={starring}
          />
        );

      case ViewMode.DETAILS:
        return (
          <MovieCardFullDetails
            director={director}
            starring={starring}
            runTime={runTime}
            genre={genre}
            released={released}
          />
        );

      case ViewMode.REVIEWS:
        return (
          <MovieCardFullReviews

          />
        );
    }

    return null;
  }

  render() {
    const {name, posterImage} = this.props;

    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <MovieCardFullPoster
            name={name}
            posterImage={posterImage}
          />

          <div className="movie-card__desc">
            <MovieCardFullNav
              onClickNavItem={this._handleClickNavItem}
              activNav={this.state.viewMode}
            />
            {this._renderCardDesc()}
          </div>
        </div>
      </div>
    );
  }
}


MovieCardFullInfo.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default MovieCardFullInfo;

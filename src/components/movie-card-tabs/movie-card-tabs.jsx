import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {tabList} from '../../constants';

import MovieCardTabNav from '../movie-card-tab-nav/movie-card-tab-nav.jsx';
import MovieCardTabOverview from '../movie-card-tab-overview/movie-card-tab-overview.jsx';
import MovieCardTabDetail from '../movie-card-tab-details/movie-card-tab-details.jsx';
import MovieCardTabReviews from '../movie-card-tab-reviews/movie-card-tab-reviews.jsx';


class MovieCardTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: tabList.OVERVIEW,
    };

    this._handleClickTab = this._handleClickTab.bind(this);
  }

  _handleClickTab(tab) {
    this.setState(() => ({
      activeTab: tab,
    }));
  }

  _renderCardTab() {
    const {activeTab} = this.state;
    const {rating, scoresCount, director, starring, description, runTime, genre, released} = this.props;

    switch (activeTab) {
      case tabList.OVERVIEW:
        return (
          <MovieCardTabOverview
            rating={rating}
            scoresCount={scoresCount}
            director={director}
            starring={starring}
            description={description}
          />
        );
      case tabList.DETAILS:
        return (
          <MovieCardTabDetail
            director={director}
            starring={starring}
            runTime={runTime}
            genre={genre}
            released={released}
          />
        );
      case tabList.REVIEWS:
        return (
          <MovieCardTabReviews

          />
        );
    }

    return null;
  }

  render() {
    const {activeTab} = this.state;

    return (
      <div className="movie-card__desc">
        <MovieCardTabNav
          onClickTabs={this._handleClickTab}
          activeTab={activeTab}
        />
        {this._renderCardTab()}
      </div>
    );
  }
}


MovieCardTabs.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default MovieCardTabs;

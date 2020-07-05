import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {ViewMode} from '../../constant.js';

import Main from '../main/main.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusFilmCardId: 2,
      activeMovieCardId: null,
      viewMode: ViewMode.MAIN,
    };

    this._timer = null;

    this._handleClickCard = this._handleClickCard.bind(this);
    this._handleMouseEnterCard = this._handleMouseEnterCard.bind(this);
    this._handleMouseLeaveCard = this._handleMouseLeaveCard.bind(this);
  }

  _handleMouseEnterCard(id) {
    this._timer = setTimeout(() => {
      this.setState(() => ({
        focusFilmCardId: id,
      }));
    }, 1000);
  }

  _handleMouseLeaveCard() {
    clearTimeout(this._timer);
    this._timer = null;
  }

  _handleClickCard(id) {
    this.setState(() => ({
      activeMovieCardId: id,
      viewMode: ViewMode.DETAILS,
    }));
  }

  _renderMoviesScreen() {
    const {movies, genres} = this.props;

    switch (this.state.viewMode) {
      case ViewMode.MAIN:
        return (
          <Main
            moveDetails={movies[this.state.focusFilmCardId]}
            movies={movies}
            genres={genres}
            onClickCard={this._handleClickCard}
            onMouseEnterCard={this._handleMouseEnterCard}
            onMouseLeaveCard={this._handleMouseLeaveCard}
          />
        );
      case ViewMode.DETAILS:
        return (
          <MovieCardFull
            moveDetails={movies[this.state.activeMovieCardId]}
            movies={movies}
            onClickCard={this._handleClickCard}
            onMouseEnterCard={() => {}}
            onMouseLeaveCard={() => {}}
          />
        );
    }

    return null;
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderMoviesScreen()}
          </Route>
          <Route exact path='/dev-component'>
            <MovieCardFull
              moveDetails={this.props.movies[0]}
              movies={this.props.movies}
              onClickCard={this._handleClickCard}
              onMouseEnterCard={() => {}}
              onMouseLeaveCard={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default App;

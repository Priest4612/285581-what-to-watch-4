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
      activeMovieCardId: null,
      viewMode: ViewMode.MAIN,
    };

    this._handleClickCard = this._handleClickCard.bind(this);
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
            moveDetails={movies[0]}
            movies={movies}
            genres={genres}
            onClickCard={this._handleClickCard}
          />
        );
      case ViewMode.DETAILS:
        return (
          <MovieCardFull
            moveDetails={movies[this.state.activeMovieCardId]}
            movies={movies}
            onClickCard={this._handleClickCard}
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

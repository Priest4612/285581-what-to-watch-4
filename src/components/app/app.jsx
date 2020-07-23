import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import {ViewMode} from '../../constants';
import Main from '../main/main.jsx';
import ActionCreator from '../../store/action-creators';
import {getGenres, getMovies} from '../../services/data-services.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCardId: null,
    };

    this._handleClickCard = this._handleClickCard.bind(this);
  }

  componentDidMount() {
    const {onLoadingGenres, onLoadingMovies, onChangeMainView} = this.props;

    onChangeMainView();

    getGenres()
      .then((genres) => onLoadingGenres(genres));

    getMovies()
      .then((movies) => onLoadingMovies(movies));

  }

  _handleClickCard(id) {
    this.setState(() => ({
      activeMovieCardId: id,
      viewMode: ViewMode.DETAILS,
    }));
  }

  _renderMoviesScreen() {
    const {movies, genres} = this.props;

    if (!genres.list.length || !movies.list.length) {
      return <div>Loading...</div>;
    }

    return (
      <Main
        moveDetails={movies.list[0]}
        movies={movies.list}
        genres={genres.list}
        onClickCard={this._handleClickCard}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderMoviesScreen()}
          </Route>
          {/* <Route exact path='/dev-component'>
            <MovieCardFull
              moveDetails={this.props.movies[0]}
              movies={this.props.movies}
              onClickCard={this._handleClickCard}
              onMouseEnterCard={() => {}}
              onMouseLeaveCard={() => {}}
            />
          </Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  onChangeMainView: PropTypes.func.isRequired,
  onLoadingGenres: PropTypes.func.isRequired,
  onLoadingMovies: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    list: PropTypes.array.isRequired,
    activeMovieId: PropTypes.number,
  }).isRequired,
  genres: PropTypes.shape({
    list: PropTypes.array.isRequired,
    activeGenre: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres,
});

const mapDispatchToProps = (dispath) => ({
  onChangeMainView() {
    dispath(ActionCreator.Views.setMainView());
  },

  onLoadingGenres(genres) {
    dispath(ActionCreator.Genres.genresLoaded(genres));
  },

  onLoadingMovies(movies) {
    dispath(ActionCreator.Movies.moviesLoaded(movies));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

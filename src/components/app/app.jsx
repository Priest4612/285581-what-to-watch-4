import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import {ViewMode} from '../../constants';
import Main from '../../../refactoring/src/components/main/main.jsx';
import {moviesLoaded} from '../../action-creators.js/movies-actions.js';
import {/* getGenries, */getMovies} from '../../services/data-services.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCardId: null,
    };

    this._handleClickCard = this._handleClickCard.bind(this);
  }

  componentDidMount() {
    const {onMoviesLoading} = this.props;
    getMovies()
      .then((movies) => onMoviesLoading(movies));
  }

  _handleClickCard(id) {
    this.setState(() => ({
      activeMovieCardId: id,
      viewMode: ViewMode.DETAILS,
    }));
  }

  _renderMoviesScreen() {
    const {movies, genres} = this.props;

    if (!movies.length) {
      return <div>Loading...</div>;
    }

    return (
      <Main
        moveDetails={movies[0]}
        movies={movies}
        genres={genres}
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
  onMoviesLoading: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispath) => ({
  onMoviesLoading(movies) {
    dispath(moviesLoaded(movies));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

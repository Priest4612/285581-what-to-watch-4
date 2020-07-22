import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ViewMode} from '../../constants';

import MovieCard from '../movie-card/movie-card.jsx';
import PageContent from '../page-content/page-content.jsx';


class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: 0,
      viewMode: ViewMode.MAIN,

      activeGenre: this.props.genres[0].name,

      activeCardId: null,
      isPlaying: false,
      isMuted: true,
    };

    this._handleClickCard = this._handleClickCard.bind(this);
    this._handleMouseEnterCard = this._handleMouseEnterCard.bind(this);
    this._handleMouseLeaveCard = this._handleMouseLeaveCard.bind(this);
    this._handleClickGenreItem = this._handleClickGenreItem.bind(this);
  }

  _handleClickCard(id) {
    this.setState(() => ({
      activeMovieId: id,
      viewMode: ViewMode.FULL,
    }));
  }

  _handleClickGenreItem(genre) {
    this.setState(() => ({
      activeGenre: this.props.genres.find((item) => item.name === genre).name
    }));
  }

  _handleMouseEnterCard(id) {
    this._timer = setTimeout(() => {
      this.setState(() => ({
        activeCardId: id,
        isPlaying: true,
      }));
    }, 1000);
  }

  _handleMouseLeaveCard() {
    clearTimeout(this._timer);
    this._timer = null;
    this.setState(() => ({
      activeCardId: null,
      isPlaying: false,
    }));
  }

  render() {
    const avatarImg = `img/avatar.jpg`;
    const {
      viewMode, activeMovieId,
      activeCardId, isMuted, isPlaying,
      activeGenre
    } = this.state;
    const {genres, movies} = this.props;
    const activeMovie = movies.find((movie) => movie.id === activeMovieId);

    return (
      <React.Fragment>
        <MovieCard
          viewMode={viewMode}
          avatarImg={avatarImg}
          movieDetails={activeMovie}
        />
        <PageContent
          onClickCard={this._handleClickCard}
          onMouseEnterCard={this._handleMouseEnterCard}
          onMouseLeaveCard={this._handleMouseLeaveCard}
          onClickGenreItem={this._handleClickGenreItem}
          movieDetails={activeMovie}
          viewMode={viewMode}
          activeGenre={activeGenre}
          genres={genres}
          movies={movies}
          isMuted={isMuted}
          isPlaying={isPlaying}
          activeCardId={activeCardId}
        />
      </React.Fragment>
    );
  }
}


Main.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Main;

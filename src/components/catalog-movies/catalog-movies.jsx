import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class CatalogMovies extends PureComponent {
  constructor(props) {
    super(props);

    this._timer = null;

    this.state = {
      isPlaying: false,
      isMuted: true,
      activeMovieId: null,
    };

    this._handleMouseEnterCard = this._handleMouseEnterCard.bind(this);
    this._handleMouseLeaveCard = this._handleMouseLeaveCard.bind(this);
  }

  _handleMouseEnterCard(id) {
    this._timer = setTimeout(() => {
      this.setState(() => ({
        activeMovieId: id,
        isPlaying: true,
      }));
    }, 1000);
  }

  _handleMouseLeaveCard() {
    clearTimeout(this._timer);
    this._timer = null;
    this.setState(() => ({
      activeMovieId: null,
      isPlaying: false,
    }));
  }

  render() {
    const {movies, onClickCard} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((movie) => <SmallMovieCard
            key={movie.id}
            movie={movie}
            onClickCard={onClickCard}
            onMouseEnterCard={this._handleMouseEnterCard}
            onMouseLeaveCard={this._handleMouseLeaveCard}
            activeMovieId={this.state.activeMovieId}
            isMuted={this.state.isMuted}
            isPlaying={this.state.isPlaying}
          />)}
        </div>
      </React.Fragment>
    );
  }
}


CatalogMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default CatalogMovies;

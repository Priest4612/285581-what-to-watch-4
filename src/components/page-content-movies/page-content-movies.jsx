import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';


const PageContentMovies = (props) => {
  const {
    movies,
    onClickCard, onMouseEnterCard, onMouseLeaveCard,
    activeCardId,
    isMuted, isPlaying
  } = props;

  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) =>
          <article
            key={movie.id}
            onClick={() => onClickCard(movie.id)}
            onMouseEnter={() => onMouseEnterCard(movie.id)}
            onMouseLeave={() => onMouseLeaveCard()}
            className="small-movie-card catalog__movies-card"
          >
            <div className="small-movie-card__image">
              {movie.id === activeCardId && <VideoPlayer
                poster={movie.posterImage}
                src={movie.previewVideoLink}
                isPlaying={isPlaying}
                isMuted={isMuted}
              />}
              <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
            </h3>
          </article>

        )
      }
    </div>
  );
};


PageContentMovies.propTypes = {
  onClickCard: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  activeCardId: PropTypes.number,
};

export default PageContentMovies;

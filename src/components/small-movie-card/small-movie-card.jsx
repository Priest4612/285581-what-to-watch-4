import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

const SmallMovieCard = (props) => {
  const {movie, onClickCard, onMouseEnterCard, onMouseLeaveCard, activeMovieId, isMuted, isPlaying} = props;
  const {id, name, previewImage, posterImage, previewVideoLink} = movie;


  return (
    <article
      onClick={() => onClickCard(id)}
      onMouseEnter={() => onMouseEnterCard(id)}
      onMouseLeave={() => onMouseLeaveCard()}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        {id === activeMovieId && <VideoPlayer
          poster={posterImage}
          src={previewVideoLink}
          isPlaying={isPlaying}
          isMuted={isMuted}
        />}
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  onClickCard: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  activeMovieId: PropTypes.number,
};

export default SmallMovieCard;

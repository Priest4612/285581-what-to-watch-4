import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {movie, onCardTitleClick} = props;
  const {id, name, previewImage} = movie;

  return (
    <article className="small-movie-card catalog__movies-card" key={id}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onCardTitleClick}
        >{name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }),
  onCardTitleClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;

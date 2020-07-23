import {MovieRatingLevel} from '../constants';

const convertingRatingToLevel = (ratingStr) => {
  const rating = Number.parseFloat(ratingStr, 10);
  let textRating = null;

  switch (true) {
    case (rating <= MovieRatingLevel.BAD.RATING.MAX):
      textRating = MovieRatingLevel.BAD.NAME;
      break;
    case (rating <= MovieRatingLevel.NORMAL.RATING.MAX):
      textRating = MovieRatingLevel.NORMAL.NAME;
      break;
    case (rating <= MovieRatingLevel.GOOD.RATING.MAX):
      textRating = MovieRatingLevel.GOOD.NAME;
      break;
    case (rating <= MovieRatingLevel.VERY_GOOD.RATING.MAX):
      textRating = MovieRatingLevel.VERY_GOOD.NAME;
      break;
    case (rating === MovieRatingLevel.AWESOME.RATING.MAX):
      textRating = MovieRatingLevel.AWESOME.NAME;
      break;

    default:
      textRating = `NOT FOUND`;
  }

  return textRating;
};

export {convertingRatingToLevel};

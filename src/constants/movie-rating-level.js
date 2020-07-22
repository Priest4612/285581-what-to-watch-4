const MovieRatingLevel = {
  BAD: {
    NAME: `Bad`,
    RATING: {
      MIN: 0,
      MAX: 3,
    }
  },
  NORMAL: {
    NAME: `Normal`,
    RATING: {
      MIN: 3,
      MAX: 5,
    }
  },
  GOOD: {
    NAME: `Good`,
    RATING: {
      MIN: 5,
      MAX: 8,
    }
  },
  VERY_GOOD: {
    NAME: `Very good`,
    RATING: {
      MIN: 8,
      MAX: 10,
    }
  },
  AWESOME: {
    NAME: `Awesome`,
    RATING: {
      MIN: 10,
      MAX: 10,
    }
  },
};

export {MovieRatingLevel};

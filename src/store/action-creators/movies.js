import ActionType from '../action-type';

const moviesLoaded = (movies) => ({
  type: ActionType.Movies.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const setActiveMovieId = (id) => ({
  type: ActionType.Movies.CHANGE_ACTIVE_MOVIE,
  payload: id,
});

export default {
  moviesLoaded,
  setActiveMovieId,
};

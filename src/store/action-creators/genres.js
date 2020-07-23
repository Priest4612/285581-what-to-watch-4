import ActionType from '../action-type';

const genresLoaded = (genres) => ({
  type: ActionType.Genres.FETCH_GENRES_SUCCESS,
  payload: genres,
});

const setActiveGenre = (name) => ({
  type: ActionType.Genres.CHANGE_ACTIVE_GENRE,
  payload: name,
});

export default {
  genresLoaded,
  setActiveGenre,
};

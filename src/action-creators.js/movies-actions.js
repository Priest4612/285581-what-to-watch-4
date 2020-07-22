import {App} from '../action-types/action-types.js';

const moviesLoaded = (movies) => ({
  type: App.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export {moviesLoaded};

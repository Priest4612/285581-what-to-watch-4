import ActionType from '../action-type';
import {extend} from '../../utils';
import initialState from '../initial-state.js';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Views.SET_MAIN_VIEW:
      return extend(state, {
        viewMode: action.payload,
      });

    case ActionType.Views.SET_FULL_VIEW:
      return extend(state, {
        viewMode: action.payload,
      });

    case ActionType.Movies.FETCH_MOVIES_SUCCESS:
      return extend(state, {
        movies: extend(state.movies, {
          list: action.payload,
        })
      });

    case ActionType.Movies.CHANGE_ACTIVE_MOVIE:
      return extend(state, {
        movies: extend(state.movies, {
          activeMovieId: action.payload,
        })
      });

    case ActionType.Genres.FETCH_GENRES_SUCCESS:
      return extend(state, {
        genres: extend(state.genres, {
          list: action.payload,
        })
      });

    case ActionType.Genres.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        genres: extend(state.genres, {
          activeGenre: action.payload,
        }),
      });

    case ActionType.Player.SET_ACTIVE_CARD_ID:
      return extend(state.player, {
        acvtiveCardId: action.payload,
      });

    case ActionType.Player.CHANGE_STATE_PLAYER:
      return extend(state.player, {
        isPlaying: action.payload,
      });

    case ActionType.Player.CHANGE_STATE_MUTED:
      return extend(state.player, {
        isMuted: action.payload,
      });
  }


  return state;
};


export {reducer};

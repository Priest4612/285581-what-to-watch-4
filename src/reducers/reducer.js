import {App} from '../action-types/action-types.js';

import {extend} from '../utils';

import initialState from '../constants/initial-state.js';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case App.FETCH_MOVIES_SUCCESS:
      return extend(state, {
        movies: action.payload,
      });
  }

  return state;
};

export {reducer};

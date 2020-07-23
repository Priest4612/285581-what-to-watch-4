import ActionType from '../action-type';
import {ViewMode} from '../../constants';

const setFullView = () => ({
  type: ActionType.Views.SET_FULL_VIEW,
  payload: ViewMode.FULL,
});

const setMainView = () => ({
  type: ActionType.Views.SET_MAIN_VIEW,
  payload: ViewMode.MAIN,
});

export default {
  setFullView,
  setMainView,
};

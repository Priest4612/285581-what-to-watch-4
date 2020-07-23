import ActionType from '../action-type';

const setActiveCardId = (id) => ({
  type: ActionType.Player.SET_ACTIVE_CARD_ID,
  payload: id,
});

const changeStatePlayer = (state) => ({
  type: ActionType.Player.CHANGE_STATE_PLAYER,
  payload: !state,
});

const changeStateMuter = (state) => ({
  type: ActionType.Player.CHANGE_STATE_MUTED,
  payload: !state,
});

export default {
  setActiveCardId,
  changeStatePlayer,
  changeStateMuter,
};

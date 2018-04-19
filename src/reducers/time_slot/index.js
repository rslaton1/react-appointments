import * as actionTypes from '../../constants/action_types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_TIME_SLOT:
      return Object.assign({}, state, action.timeSlot);
    default:
      return state;
  }
}

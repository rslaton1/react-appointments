import * as actionTypes from '../../constants/action_types';

const initialState = {
  shouldDisplayModal: false,
  timeSlotID: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        shouldDisplayModal: action.shouldDisplayModal,
        timeSlotID: action.timeSlotID
      };
    case actionTypes.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

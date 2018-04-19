import * as actionTypes from '../../constants/action_types';

export function showModal(timeSlotID) {
  return {
    type: actionTypes.SHOW_MODAL,
    shouldDisplayModal: true,
    timeSlotID
  };
}

export function hideModal() {
  return {
    type: actionTypes.HIDE_MODAL,
    shouldDisplayModal: false
  };
}

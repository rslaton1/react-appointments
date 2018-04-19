import * as actionTypes from '../../constants/action_types';

export function saveTimeSlot(timeSlot) {
  return {
    type: actionTypes.SAVE_TIME_SLOT,
    timeSlot
  };
}

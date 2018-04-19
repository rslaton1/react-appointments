import { combineReducers } from 'redux';
import modalReducer from './modal';
import timeSlotReducer from './time_slot';

export default combineReducers({ modal: modalReducer, timeSlots: timeSlotReducer });

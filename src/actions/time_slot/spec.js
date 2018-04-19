import * as actions from './index';
import * as actionTypes from '../../constants/action_types';

describe('saveTimeSlot()', () => {
  it('creates an action to save time slot', () => {
    const expectedAction = {
      type: actionTypes.SAVE_TIME_SLOT,
      timeSlot: 'timeSlot'
    };

    expect(actions.saveTimeSlot('timeSlot')).to.eql(expectedAction);
  });
});

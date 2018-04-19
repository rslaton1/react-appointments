import * as actions from './index';
import * as actionTypes from '../../constants/action_types';

describe('showModal()', () => {
  it('creates an action to show modal', () => {
    const expectedAction = {
      type: actionTypes.SHOW_MODAL,
      shouldDisplayModal: true,
      timeSlotID: 9
    };

    expect(actions.showModal(9)).to.eql(expectedAction);
  });
});

describe('hideModal()', () => {
  it('creates an action to hide modal', () => {
    const expectedAction = {
      type: actionTypes.HIDE_MODAL,
      shouldDisplayModal: false
    };

    expect(actions.hideModal()).to.eql(expectedAction);
  });
});

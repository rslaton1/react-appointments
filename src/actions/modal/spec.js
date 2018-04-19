import * as actions from './index';
import * as actionTypes from '../../constants/action_types';

describe('showModal()', () => {
  it('creates an action to show modal', () => {
    const expectedAction = {
      type: actionTypes.SHOW_MODAL
    };

    expect(actions.showModal()).to.eql(expectedAction);
  });
});

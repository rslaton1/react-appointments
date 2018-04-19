/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TimeSlot from './index';

describe('TimeSlot', () => {
  let element;

  const props = {
    time: 9,
    showModal: sinon.spy()
  };

  it('renders', () => {
    element = shallow(<TimeSlot />);
    expect(element).to.exist;
  });

  it('displays the time', () => {
    element = shallow(<TimeSlot { ...props } />);
    expect(element.find('span')).to.contain.text('9AM');
  });

  it('has the class time-slot', () => {
    element = shallow(<TimeSlot {...props} />);
    expect(element).to.have.className('time-slot');
  });

  it('does not have class time-slot-unavailable initially', () => {
    element = shallow(<TimeSlot {...props} />);
    expect(element).to.not.have.className('time-slot-unavailable');
  });

  it('should dispatch an action to display modal when clicked', () => {
    element = shallow(<TimeSlot {...props} />);
    element.simulate('click');
    expect(props.showModal).to.have.been.called;
  });
});

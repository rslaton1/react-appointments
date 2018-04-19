/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TimeSlot from './index';

describe('TimeSlot', () => {
  let element;

  const props = {
    time: 9,
    showModal: sinon.spy(),
    available: true
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

  it('does not have class time-slot-unavailable when available', () => {
    element = shallow(<TimeSlot {...props} />);
    expect(element).to.not.have.className('time-slot-unavailable');
  });

  it('does has class time-slot-unavailable when unavailable', () => {
    element = shallow(<TimeSlot {...props} />);
    expect(element).to.not.have.className('time-slot-unavailable');

    props.available = false;

    element = shallow(<TimeSlot {...props} />);
    expect(element).to.have.className('time-slot-unavailable');
  });

  it('should dispatch an action to display modal on click', () => {
    element = shallow(<TimeSlot {...props} />);
    element.simulate('click');
    expect(props.showModal).to.have.been.called;
  });

  it('should dispatch an action to display modal on key down', () => {
    element = shallow(<TimeSlot {...props} />);
    element.simulate('keyDown', { key: 'Return' });
    expect(props.showModal).to.have.been.called;
  });
});

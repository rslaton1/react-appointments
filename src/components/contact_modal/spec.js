/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReactModal from 'react-modal';

import ContactModal from './index';

describe('ContactModal', () => {
  let element;
  let props;

  beforeEach(() => {
    props = {
      modal: {
        shouldDisplayModal: true
      },
      hideModal: sinon.spy(),
      saveTimeSlot: sinon.spy(),
      timeSlot: { id: 9, name: '', phone: '' }
    };
  });

  it('renders when shouldDisplayModal is true', () => {
    element = shallow(<ContactModal {...props} />);
    expect(element).to.be.present;
  });

  it('does not display when shouldDisplayModal is false', () => {
    props.modal.shouldDisplayModal = false;
    element = shallow(<ContactModal {...props} />);
    expect(element.find('#contactForm')).to.not.be.present;
  });

  it('should dispatch an action to save time slot on submit', () => {
    const expectedArgument = { 9: { id: 9, name: 'Carl', phone: '111-111-1111' } };

    element = shallow(<ContactModal {...props} />);

    element.find('#name').simulate('change', { target: { name: 'name', value: 'Carl' } });
    element.find('#phone').simulate('change', { target: { name: 'phone', value: '111-111-1111' } });
    element.find('#contactForm').simulate('submit', { preventDefault: () => {} });

    expect(props.saveTimeSlot).to.have.been.calledWith(expectedArgument);
  });

  it('should dispatch an action to hide modal on submit', () => {
    element = shallow(<ContactModal {...props} />);

    element.find('#name').simulate('change', { target: { name: 'name', value: 'Carl' } });
    element.find('#phone').simulate('change', { target: { name: 'phone', value: '111-111-1111' } });
    element.find('#contactForm').simulate('submit', { preventDefault: () => { } });

    expect(props.hideModal).to.have.been.called;
  });

  it('should reset componenet state on submit', () => {
    element = shallow(<ContactModal {...props} />);

    element.find('#name').simulate('change', { target: { name: 'name', value: 'Carl' } });
    element.find('#phone').simulate('change', { target: { name: 'phone', value: '111-111-1111' } });

    expect(element).to.have.state('name', 'Carl');
    expect(element).to.have.state('phone', '111-111-1111');

    element.find('#contactForm').simulate('submit', { preventDefault: () => { } });

    expect(element).to.have.state('name', '');
    expect(element).to.have.state('phone', '');

    expect(props.hideModal).to.have.been.called;
  });

  it('should reset componenet state on close', () => {
    element = shallow(<ContactModal {...props} />);

    element.find('#name').simulate('change', { target: { name: 'name', value: 'Carl' } });
    element.find('#phone').simulate('change', { target: { name: 'phone', value: '111-111-1111' } });

    expect(element).to.have.state('name', 'Carl');
    expect(element).to.have.state('phone', '111-111-1111');

    element.find(ReactModal).prop('onRequestClose')();

    expect(element).to.have.state('name', '');
    expect(element).to.have.state('phone', '');

    expect(props.hideModal).to.have.been.called;
  });
});

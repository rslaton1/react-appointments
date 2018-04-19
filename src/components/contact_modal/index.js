import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      phone: ''
    };
    this.state = this.initialState;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { saveTimeSlot, hideModal, timeSlot: { id } } = this.props;
    const { name, phone } = this.state;

    this.setState(this.initialState);
    saveTimeSlot({ [id]: { id, name, phone } });
    hideModal();
  }

  hideModal() {
    this.setState(this.initialState);
    this.props.hideModal();
  }

  render() {
    const { modal: { shouldDisplayModal }, timeSlot } = this.props;
    return (
      <ReactModal
        isOpen={shouldDisplayModal}
        onRequestClose={() => this.hideModal()}
      >
        <form id="contactForm" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.name || timeSlot.name}
            onChange={e => this.handleChange(e)}
          />
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={this.state.phone || timeSlot.phone}
            onChange={e => this.handleChange(e)}
          />
          <button id="submitContactForm" action="submit">Submit</button>
        </form>
      </ReactModal>
    );
  }
}

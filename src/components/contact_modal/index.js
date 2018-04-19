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

  afterOpenModal() {
    const { timeSlot: { name, phone } } = this.props;
    this.setState({ name, phone });
  }

  render() {
    const { modal: { shouldDisplayModal } } = this.props;
    return (
      <ReactModal
        isOpen={shouldDisplayModal}
        onAfterOpen={() => this.afterOpenModal()}
        onRequestClose={() => this.hideModal()}
        className="contact-modal"
      >
        <form
          id="contactForm"
          className="contact-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <h2 className="contact-modal-heading">Enter your contact info</h2>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={this.state.phone}
            onChange={e => this.handleChange(e)}
          />
          <button id="submitContactForm" className="submit-button" action="submit">Submit</button>
        </form>
      </ReactModal>
    );
  }
}

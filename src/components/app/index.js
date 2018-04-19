import React, { Component } from 'react';
import TimeSlot from '../../containers/time_slot';
import ContactModal from '../../containers/contact_modal';

export default class App extends Component {
  getTimeSlots() {
    const timeSlots = [];
    for (let time = 9; time < 18; time++) {
      timeSlots.push(<TimeSlot key={time} time={time} />);
    }
    return timeSlots;
  }
  render() {
    return (
      <div>
        {this.getTimeSlots()}
        <ContactModal />
      </div>
    );
  }
}

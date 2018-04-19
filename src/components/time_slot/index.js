import React, { Component } from 'react';

export default class TimeSlot extends Component {
  constructor(props) {
    super(props);
    this.state = { available: true };
  }

  getDisplayTime() {
    const { time } = this.props;
    const period = time < 12 ? 'AM' : 'PM';
    return `${time}${period}`; // Could have done this inline but this is more readable
  }

  render() {
    const { showModal } = this.props;
    const displayTime = this.getDisplayTime();
    let className = `time-slot ${this.state.available ? '' : 'time-slot-unavailable'}`;

    return (
      <div className={className} onClick={showModal}>
        <span>{displayTime}</span>
      </div>
    );
  }
}

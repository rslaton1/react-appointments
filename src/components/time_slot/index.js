import React, { Component } from 'react';

export default class TimeSlot extends Component {
  getDisplayTime() {
    const { time } = this.props;
    const period = time < 12 ? 'AM' : 'PM';
    const twelveHourTime = (time % 12) || 12;
    return `${twelveHourTime}${period}`; // Could have done this inline but this is more readable
  }

  render() {
    const { showModal, time, available } = this.props;
    const displayTime = this.getDisplayTime();
    const className = `time-slot ${available ? '' : 'time-slot-unavailable'}`;

    return (
      <div
        role="button"
        className={className}
        onClick={() => showModal(time)}
        onKeyDown={() => showModal(time)}
        tabIndex={0}
      >
        <div className="display-time">{displayTime}</div>
      </div>
    );
  }
}

import React from 'react';

import './calendarDate.css';

class CalendarDate extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'inactive'
    };
  }

  render() {
    return (
      <div
        className={`calendar-date ${this.props.status}`}
        onClick={e => this.props.onClick(e)}>
        {this.props.text}
      </div>
    );
  }
}

export default CalendarDate;

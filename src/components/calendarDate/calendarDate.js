import React from 'react';

import './calendarDate.css';

class CalendarDate extends React.Component {
  render() {
    return (
      <div
        className={`calendar-date ${this.props.status}`}
        onClick={e => this.props.onClick(e)}>
        {this.props.date}
      </div>
    );
  }
}

export default CalendarDate;

import React, { Component } from 'react';
import { string, bool, number, any, func } from 'prop-types';
import CalendarDate from '../calendarDate/calendarDate.js';

import './calendar.css';

class Calendar extends Component {
  constructor() {
    super();

    const currentDate = new Date();

    this.state = {
      currentDate: currentDate,
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      date: currentDate.getDate(),
      day: currentDate.getDay(),
      displayYear: currentDate.getFullYear(),
      displayMonth: currentDate.getMonth(),
      calendarViews: []
    };
  }

  componentDidMount() {
    this.fillCalendar(this.state.month, this.state.year);
  }

  lastMonth() {
    let newMonth = this.state.displayMonth - 1;
    let newYear = this.state.displayYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear = newYear - 1;
    }

    this.fillCalendar(newMonth, newYear);

    this.setState({ displayMonth: newMonth, displayYear: newYear });
  }

  nextMonth() {
    let newMonth = this.state.displayMonth + 1;
    let newYear = this.state.displayYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear = newYear + 1;
    }

    this.fillCalendar(newMonth, newYear);

    this.setState({ displayMonth: newMonth, displayYear: newYear });
  }

  fillCalendar(displayMonth, displayYear, selected) {
    let calendarViews = [
      [
        <div className="week">
          <CalendarDate
            text="S"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="M"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="T"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="W"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="T"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="F"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
          <CalendarDate
            text="S"
            status="day"
            onClick={e => this.props.onClick(e)}
          />
        </div>
      ]
    ];

    const monthDate = new Date(displayYear, displayMonth, 1);
    const lastDayInMonth = new Date(displayYear, displayMonth + 1, 0);

    let date = 1;

    let week = [];
    for (let i = 0; i < 7; i++) {
      if (i >= monthDate.getDay()) {
        const fillDate = new Date(displayYear, displayMonth, date);
        let status = 'active';
        if (i == 0 || i == 6) {
          status = 'inactive';
        } else if (fillDate < this.state.currentDate) {
          status = 'inactive';
        } else if (fillDate == new Date(this.props.selected)) {
          status = 'selected';
        }
        week.push(
          <CalendarDate
            text={date}
            date={fillDate.toString()}
            status={status}
            onClick={e => this.props.onClick(e)}
          />
        );
        date++;
      } else {
        week.push(<CalendarDate date="" status="" onClick={e => {}} />);
      }
    }
    calendarViews.push(<div className="week">{week}</div>);

    while (date <= lastDayInMonth.getDate()) {
      week = [];
      for (let i = 0; i < 7; i++) {
        if (date <= lastDayInMonth.getDate()) {
          const fillDate = new Date(displayYear, displayMonth, date);
          let status = 'active';
          if (i == 0 || i == 6) {
            status = 'inactive';
          } else if (fillDate < this.state.currentDate) {
            status = 'inactive';
          } else if (fillDate == new Date(this.props.selected)) {
            status = 'selected';
          }
          week.push(
            <CalendarDate
              text={date}
              date={fillDate.toString()}
              status={status}
              onClick={e =>
                this.props.onClick(
                  e,
                  this.state.displayMonth,
                  this.state.displayYear
                )
              }
              selected={this.props.selected}
            />
          );
          date++;
        } else {
          week.push(<CalendarDate date="" status="" onClick={e => {}} />);
        }
      }
      calendarViews.push(<div className="week">{week}</div>);
    }
    // this.setState({ calendarViews: calendarViews });
  }

  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return (
      <div className="calendar">
        <div className="calendar-heading">
          <svg
            className="calendar-arrow"
            id="back"
            viewBox="0 0 6.9 9.6"
            width="6.9"
            height="9.6"
            onClick={() => {
              this.lastMonth();
            }}>
            <defs>
              <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                <rect width="6.9" height="9.6" />
              </clipPath>
            </defs>
            <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
              <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
            </g>
          </svg>
          <p className="calendar-month">{`${months[this.state.displayMonth]} ${
            this.state.displayYear
          }`}</p>
          <svg
            class="calendar-arrow"
            id="forward"
            viewBox="0 0 6.9 9.6"
            width="6.9"
            height="9.6"
            onClick={() => {
              this.nextMonth();
            }}>
            <defs>
              <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                <rect width="6.9" height="9.6" />
              </clipPath>
            </defs>
            <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
              <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
            </g>
          </svg>
        </div>
        <div className="calendar-body">
          {this.fillCalendar(
            this.state.displayMonth,
            this.state.displayYear,
            this.props.selected
          )}
        </div>
      </div>
    );
  }
}

export default Calendar;

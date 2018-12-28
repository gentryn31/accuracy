import React, { Component } from 'react';
import { string, bool, number, any, func } from 'prop-types';

import './button.css';

class Button extends Component {
  componentDidMount() {
    document.removeEventListener('keyup', e => {
      if (
        e.keyCode == 13 &&
        this.props.active &&
        document.activeElement ==
          document.getElementById(
            `${this.props.text
              .split(' ')
              .join('-')
              .toLowerCase()}-button`
          )
      ) {
        this.props.onClick();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => {
      if (
        e.keyCode == 13 &&
        this.props.active &&
        document.activeElement ==
          document.getElementById(
            `${this.props.text
              .split(' ')
              .join('-')
              .toLowerCase()}-button`
          )
      ) {
        this.props.onClick();
      }
    });
  }

  render() {
    const text = this.props.text;
    const id = `${text
      .split(' ')
      .join('-')
      .toLowerCase()}-button`;
    return (
      <div
        className={`button ${this.props.raised ? 'raised' : ''} ${
          this.props.active ? 'active' : 'inactive'
        }`}
        id={id}
        tabIndex={0}
        onClick={() => {
          this.props.active ? this.props.onClick() : '';
        }}>
        {this.props.text}
        {this.props.arrow ? (
          <svg
            className="button-arrow"
            viewBox="0 0 6.9 9.6"
            width="6.9"
            height="9.6">
            <defs>
              <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                <rect width="6.9" height="9.6" />
              </clipPath>
            </defs>
            <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
              <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
            </g>
          </svg>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Button.propTypes = {
  text: string.isRequired,
  raised: bool,
  arrow: bool,
  active: bool,
  onClick: func
};

Button.defaultProps = {
  raised: true,
  arrow: true,
  active: true,
  onClick: () => {}
};

export default Button;

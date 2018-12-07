import React from 'react';
import { string } from 'prop-types';

import TextLink from '../textLink/textLink.js';

import './menu.css';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'inactive'
    };
  }

  toggleMenu() {
    let newStatus = this.state.status == 'active' ? 'inactive' : 'active';
    this.setState({
      status: newStatus
    });
  }

  render() {
    return (
      <div className={`menu ${this.state.status}`}>
        <i
          className="material-icons"
          id="menu-button"
          onClick={() => {
            this.toggleMenu();
          }}>
          {this.state.status == 'active' ? 'close' : 'menu'}
        </i>
        <div className={'menu-content'}>
          <div>
            <b>SERVICES</b>
            <TextLink text="Bookkeeping" link="bookkeeping" />
            <TextLink text="Audits" link="audits" />
            <TextLink text="Taxes" link="taxes" />
            <TextLink text="Annual Reports" link="annual-reports" />
            <TextLink text="Consulting" link="consulting" />
          </div>
          <div>
            <b>HELP</b>
            <TextLink text="About Us" link="about" />
            <TextLink text="Contact Us" link="contact" />
            <TextLink text="FAQs" link="faqs" />
            <TextLink text="Site Map" link="site-map" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

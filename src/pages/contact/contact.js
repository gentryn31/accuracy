import React from 'react';

import TextLink from '../../components/textLink/textLink.js';

import './contact.css';

class ContactPage extends React.Component {
  componentDidMount() {
    document.getElementById('toolbar').scrollIntoView();
  }

  render() {
    return (
      <div className="page" id="contact-page">
        <div className="section" id="contact-section">
          <h2>Get in Touch</h2>
          <i className="material-icons">phone_in_talk</i>
          <h4>Phone</h4>
          <p>(816) 435-6821</p>
          <h4>Email</h4>
          <TextLink link="mailto:help@accuracy.com" text="help@accuracy.com" />
          <h4>Social</h4>
          <TextLink link="https://www.twitter.com" text="Twitter" />
          <TextLink link="https://www.instagram.com" text="Instagram" />
          <TextLink link="https://www.facebook.com" text="Facebook" />
          <TextLink link="https://www.youtube.com" text="YouTube" />
        </div>
      </div>
    );
  }
}

export default ContactPage;

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
          <h2 id="contact-title">Get in Touch</h2>
          <h6>Phone</h6>
          <p>(816) 435-6821</p>
          <h6>Email</h6>
          <TextLink link="mailto:help@accuracy.com" text="help@accuracy.com" />
          <h6>Social</h6>
          <TextLink link="https://www.twitter.com" text="Twitter" />
          <TextLink link="https://www.instagram.com" text="Instagram" />
          <TextLink link="https://www.facebook.com" text="Facebook" />
          <TextLink link="https://www.youtube.com" text="YouTube" />
          <div className="contact-tint" />
        </div>
      </div>
    );
  }
}

export default ContactPage;

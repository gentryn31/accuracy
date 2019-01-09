import React from 'react';
import * as firebase from 'firebase';

import TextLink from '../../components/textLink/textLink.js';
import Button from '../../components/button/button.js';

import './contact.css';

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      contactForm: {
        email: '',
        name: '',
        query: '',
      }
    }
  }

  componentDidMount() {
    document.getElementById('toolbar').scrollIntoView();
  }

  clearForm = () => {
    const contactForm = this.state.contactForm;

    Object.keys(contactForm)
      .filter(input => {
        return input != 'date';
      })
      .map(input => {
        document.getElementById(`schedule-${input}`).value = '';
        return input;
      });

    this.setState({
      contactForm: { name: '', email: '', query: '' }
    });
  };

  submitForm = () => {
    const queryId = this.generateId();

    const email = this.state.contactForm.email;
    const query = this.state.contactForm.query;
    const name = this.state.contactForm.name;

    const that = this;
    
    firebase.database().ref('queries/' + queryId).set({
      email: email,
      query: query,
      name: name,
    }).then(() => {
      that.clearForm();
      const confirmation = document.querySelector('.schedule-form-confirmation');
      confirmation.innerHTML = "Thank you for reaching out. We'll get back to you through email with more information as soon as possible.";
      confirmation.className = 'schedule-form-confirmation active';
    });
  };

  generateId = () => {
    let id = "";
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 10; i++) {
        id += chars[Math.floor(Math.random() * 62)];
    }

    return id;
  };

  render() {
    return (
      <div className="page" id="contact-page">
        <div className="section" id="contact-section">
          <div>
            <h2 id="contact-title">Get in Touch</h2>
            <h6>Phone</h6>
            <p>(816) 435-6821</p>
            <h6>Email</h6>
            <a href="mailto:help@accuracy.com">help@accuracy.com</a>
            <h6>Social</h6>
            <TextLink link="https://www.twitter.com" text="Twitter" />
            <TextLink link="https://www.instagram.com" text="Instagram" />
            <TextLink link="https://www.facebook.com" text="Facebook" />
            <TextLink link="https://www.youtube.com" text="YouTube" />
            </div>
          <form id="schedule-form">
            <div className="input-name">Name</div>
            <input
              id="schedule-name"
              type="text"
              onBlur={() => {
                const contactForm = this.state.contactForm;
                const nameValue = document.getElementById('schedule-name')
                  .value;
                contactForm.name = nameValue;
                this.setState({ contactForm: contactForm });
              }}
            />
            <div className="input-name">Email</div>
            <input
              id="schedule-email"
              type="email"
              onBlur={() => {
                const contactForm = this.state.contactForm;
                const emailValue = document.getElementById('schedule-email')
                  .value;
                contactForm.email = emailValue;
                this.setState({ contactForm: contactForm });
              }}
            />
            <div className="input-name">Query</div>
            <textarea
              id="schedule-query"
              onBlur={() => {
                const contactForm = this.state.contactForm;
                const queryValue = document.getElementById('schedule-query')
                  .value;
                contactForm.query = queryValue;
                this.setState({ contactForm: contactForm });
              }}
            />
            <Button
              text="Schedule"
              active={
                this.state.contactForm.email != '' &&
                this.state.contactForm.name != '' &&
                this.state.contactForm.query != ''
              }
              onClick={() => {
                this.submitForm();
              }}
            />
            <div className="schedule-form-confirmation">
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;

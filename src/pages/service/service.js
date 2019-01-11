import React from 'react';
import * as firebase from 'firebase';

import Button from '../../components/button/button.js';
import Calendar from '../../components/calendar/calendar.js';

import './service.css';

class ServicePage extends React.Component {
  constructor() {
    super();

    this.state = {
      service: '',
      details: {
        name: '',
        icon: '',
        description: '',
        pricing: []
      },
      contactForm: {
        name: '',
        company: '',
        email: '',
        date: '',
        message: '',
      }
    };
  }

  componentDidMount() {
    this.fillPageFromParams();
    this.handleHash();
    this.clearForm();
  }

  componentWillReceiveProps(newProps) {
    this.handleHash(newProps);
    if (newProps.match.params.service != this.props.match.params.service) {
      this.fillPageFromParams(newProps.match.params);
      this.clearForm();
    }
  }

  handleHash = (props = this.props) => {
    const hash = props.location.hash;
    const hasHash = hash != '';
    if (hasHash) {
      document.getElementById(hash.substring(1)).scrollIntoView();
    } else {
      document.getElementById('toolbar').scrollIntoView();
    }
  };

  fillPageFromParams = (params = this.props.match.params) => {
    const service = params.service
      .split('-')
      .map(word => {
        return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
      })
      .join(' ');
    this.setState({ service: service, details: this.getDetails(service) });
  };

  dateSelected = e => {
    const date = e.target.innerText;

    this.setState({ dateInput: e.target.innerText });
  };

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
      contactForm: { name: '', company: '', email: '', date: '', message: '' }
    });
  };

  submitForm = () => {
    const messageId = this.generateId();

    const company = this.state.contactForm.company;
    const date = this.state.contactForm.date;
    const email = this.state.contactForm.email;
    const message = this.state.contactForm.message;
    const name = this.state.contactForm.name;
    const service = this.state.service;

    const that = this;
    
    firebase.database().ref('messages/' + messageId).set({
      company: company,
      date: date,
      email: email,
      message: message,
      name: name,
      service: service,
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
  }

  getDetails = service => {
    const details = {
      Bookkeeping: {
        name: 'Bookkeeping',
        icon: 'insert_chart',
        description: 'Accuracy\'s bookkeeping services allow you to better understand the financial workings of your business. These insights allow for better awareness of weaknesses and potential improvements in your business structure, leading to informed financial decisions. When tax season approaches, properly prepared books reduce the seemingly inescapable stress.',
        pricing: [
          {
            name: "Small",
            price: "$100/mo",
            description: "billed annually. $125/mo billed monthly.",
            condition: "Monthly Expenses Below $10,000"
          },
          {
            name: "Medium",
            price: "$250/mo",
            description: "billed annually. $300/mo billed monthly.",
            condition: "Monthly Expenses Below $50,000"
          },
          {
            name: "Large",
            price: "$400/mo",
            description: "billed annually. $500/mo billed monthly.",
            condition: "Monthly Expenses Below $100,000"
          },
          {
            name: "Enterprise",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Monthly Expenses Above $100,000"
          },
        ]
      },
      Taxes: {
        name: 'Taxes',
        icon: 'account_balance',
        description: 'Tax season is stressful. Our tax specialists keep updated on the ever-changing tax codes to maximize savings and minimize pain for your business. Just hand off your books once a year and we will take care of the hard part. If you use Accuracy for bookkeeping, the process is even smoother and cheaper, as well.',
        pricing: [
          {
            name: "Small",
            price: "$175",
            description: "with Accuracy Bookkeeping. $200 otherwise.",
            condition: "Monthly Expenses Below $10,000"
          },
          {
            name: "Medium",
            price: "$350",
            description: "with Accuracy Bookkeeping. $500 otherwise.",
            condition: "Monthly Expenses Below $50,000"
          },
          {
            name: "Large",
            price: "$750",
            description: "with Accuracy Bookkeeping. $825 otherwise.",
            condition: "Monthly Expenses Below $100,000"
          },
          {
            name: "Enterprise",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Monthly Expenses Above $100,000"
          },
        ]
      },
      Audits: {
        name: 'Audits',
        icon: 'search',
        description: 'When it comes to auditing, accuracy is the name of the game. Accuracy also is the name of our company because of its importance to everything we do. Our attention to detail and unbiased perspective during financial audits provides insights to help improve your business.',
        pricing: [
          {
            name: "Small",
            price: "$2,500",
            description: "with Accuracy Bookkeeping. $3,000 otherwise.",
            condition: "Monthly Expenses Below $10,000"
          },
          {
            name: "Medium",
            price: "$10,000",
            description: "with Accuracy Bookkeeping. $12,500 otherwise.",
            condition: "Monthly Expenses Below $50,000"
          },
          {
            name: "Large",
            price: "$17,500",
            description: "with Accuracy Bookkeeping. $25,000 otherwise.",
            condition: "Monthly Expenses Below $100,000"
          },
          {
            name: "Enterprise",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Monthly Expenses Above $100,000"
          },
        ]
      },
      'Annual Reports': {
        name: 'Annual Reports',
        icon: 'date_range',
        description: 'A well-written, informational annual report is the first step to getting new investors and maintaining trust in existing investors. Our experience writing for growing companies brings professionalism to your reports while saving you time.',
        pricing: [
          {
            name: "Small",
            price: "$1,500",
            description: "with Accuracy Bookkeeping. $2,500 otherwise.",
            condition: "Monthly Expenses Below $10,000"
          },
          {
            name: "Medium",
            price: "$7,500",
            description: "with Accuracy Bookkeeping. $10,000 otherwise.",
            condition: "Monthly Expenses Below $50,000"
          },
          {
            name: "Large",
            price: "$15,000",
            description: "with Accuracy Bookkeeping. $20,000 otherwise.",
            condition: "Monthly Expenses Below $100,000"
          },
          {
            name: "Enterprise",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Monthly Expenses Above $100,000"
          },
        ]
      },
      Consulting: {
        name: 'Consulting',
        icon: 'forum',
        description: 'Our experience with a variety of startups gives us a unique advantage in giving advice to your company. Whether you are launching a new product line or looking to refresh existing ones, we can take lessons learned from similar situations to help you avoid mistakes the first time.',
        pricing: [
          {
            name: "Organizational",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Varies by company size"
          },
          {
            name: "Financial",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Varies by monthly expenses"
          },
          {
            name: "Product Development",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Varies by project scope"
          },
          {
            name: "Tax Optimization",
            price: "Call",
            description: "Call or email us for a quote for your business.",
            condition: "Varies by monthly expenses"
          },
        ]
      }
    };

    return details[service];
  };

  createPricingViews = pricingData => {
    let views = [];
    pricingData.map((data) => {
      views.push(<div className="price-tag">
        <p className="tag-name">{data.name}</p>
        <p className="tag-price">{data.price}</p>
        <p className="tag-description">{data.description}</p>
        <p className="tag-condition">{data.condition}</p>
        <Button text="Schedule" onClick={() => { 
          this.props.history.push(`#schedule-section`);

          const interest = `I am interested in the ${data.name.toLowerCase()} plan.`;
          let contactForm = this.state.contactForm;
          contactForm.message = interest;
          this.setState({ contactForm: contactForm }, () => {
            document.getElementById('schedule-message').value = interest;
          });

        }} />
      </div>);
    });
    return views;
  };

  render() {
    return (
      <div className="page" id="service-page">
        <div className="section" id="service-info-section">
          <h2>{this.state.details.name}</h2>
          <p>{this.state.details.description}</p>
          <i className="material-icons">{this.state.details.icon}</i>
        </div>
        <div className="section" id="service-pricing-section">
          <h3>Pricing</h3>
          <div id="pricing-details">
            {this.createPricingViews(this.state.details.pricing)}
          </div>
        </div>
        <div className="section" id="schedule-section">
          <h3 id="schedule-title">Schedule a Meeting</h3>
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
            <div className="input-name">Company</div>
            <input
              id="schedule-company"
              type="text"
              onBlur={() => {
                const contactForm = this.state.contactForm;
                const companyValue = document.getElementById('schedule-company')
                  .value;
                contactForm.company = companyValue;
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
            <div className="input-name">
              Message <i>(optional)</i>
            </div>
            <textarea
              id="schedule-message"
              onBlur={() => {
                const contactForm = this.state.contactForm;
                const messageValue = document.getElementById('schedule-message')
                  .value;
                contactForm.message = messageValue;
                this.setState({ contactForm: contactForm });
              }}
            />
          </form>
          <Calendar
            onClick={(e, month, year) => {
              const contactForm = this.state.contactForm;
              const dateValue = new Date(
                year,
                month,
                e.target.innerText
              ).toString();
              contactForm.date = dateValue;
              this.setState({ contactForm: contactForm });
            }}
            selected={this.state.contactForm.date}
          />
          <div className="schedule-action-container">
            <div>
              <Button
                text="Schedule"
                active={
                  this.state.contactForm.company != '' &&
                  this.state.contactForm.date != '' &&
                  this.state.contactForm.email != '' &&
                  this.state.contactForm.name != ''
                }
                onClick={() => {
                  this.submitForm();
                }}
              />
              <Button
                text="Reset"
                raised={false}
                arrow={false}
                active={
                  this.state.contactForm.company != '' ||
                  this.state.contactForm.date != '' ||
                  this.state.contactForm.email != '' ||
                  this.state.contactForm.name != '' ||
                  this.state.contactForm.message != ''
                }
                onClick={() => {
                  this.clearForm();
                }}
              />
            </div>
          </div>
          <div className="schedule-form-confirmation">
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePage;

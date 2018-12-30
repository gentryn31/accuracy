import React from 'react';

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
      }
    };
  }

  componentDidMount() {
    this.fillPageFromParams();
  }

  componentWillReceiveProps(newProps) {
    this.fillPageFromParams(newProps.match.params);
  }

  fillPageFromParams = (params = this.props.match.params) => {
    const service = params.service
      .split('-')
      .map(word => {
        return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
      })
      .join(' ');
    this.setState({ service: service, details: this.getDetails(service) });
  };

  getDetails = service => {
    const details = {
      Bookkeeping: {
        name: 'Bookkeeping',
        icon: 'pie_chart',
        description: '',
        pricing: []
      },
      Taxes: {
        name: 'Taxes',
        icon: 'account_balance',
        description: '',
        pricing: []
      },
      Audits: {
        name: 'Audits',
        icon: 'search',
        description: '',
        pricing: []
      },
      'Annual Reports': {
        name: 'Annual Reports',
        icon: 'insert_chart',
        description: '',
        pricing: []
      },
      Consulting: {
        name: 'Consulting',
        icon: 'chat',
        description: '',
        pricing: []
      }
    };

    return details[service];
  };

  createPricingViews = pricingArray => {};

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
      </div>
    );
  }
}

export default ServicePage;

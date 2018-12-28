import React from 'react';

import Toolbar from '../components/toolbar/toolbar.js';
import Menu from '../components/menu/menu.js';

class ServicePage extends React.Component {
  constructor() {
    super();

    this.state = {
      service: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const service = nextProps.match.params.service
      .split('-')
      .map(word => {
        return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
      })
      .join(' ');
    return { service: service };
  }

  render() {
    return (
      <div className="page">
        <h1>{this.state.service}</h1>
      </div>
    );
  }
}

export default ServicePage;

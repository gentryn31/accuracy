import React from 'react';

import './about.css';

class AboutPage extends React.Component {
  componentDidMount() {
    this.handleHash();
  }

  componentWillReceiveProps(newProps) {
    this.handleHash(newProps);
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

  render() {
    return (
      <div className="page">
        <div id="mission" className="section">
          <h2>
            What's in a name?
            <br />
            For us, everything.
          </h2>
        </div>
        <div id="history" className="section">
          <h3>History</h3>
        </div>
        <div id="team" className="section">
          <h3>Get to Know the Team</h3>
        </div>
      </div>
    );
  }
}

export default AboutPage;

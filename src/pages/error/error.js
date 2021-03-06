import React from 'react';

import Button from '../../components/button/button.js';

import './error.css';

class ErrorPage extends React.Component {
  componentDidMount() {
    document.getElementById('toolbar').scrollIntoView();
  }

  render() {
    return (
      <div className="page" id="error-page">
        <div className="section" id="error-section">
          <h2>
            Oops!
            <br />
            Something went wrong.
          </h2>
          <Button
            text="Return Home"
            onClick={() => {
              this.props.history.push('/');
            }}
          />
        </div>
      </div>
    );
  }
}

export default ErrorPage;

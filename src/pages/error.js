import React from 'react';

import Button from '../components/button/button.js';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Something went wrong.</h1>
        <Button
          text="Return Home"
          onClick={() => {
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

export default ErrorPage;

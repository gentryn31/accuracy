import React from 'react';

import './faqs.css';

class FaqPage extends React.Component {
  render() {
    return (
      <div className="page" id="faq-page">
        <div className="section" id="faq-section">
          <h2>
            Got Questions?
            <br />
            We have answers.
          </h2>
          <i className="material-icons">help</i>
          <div className="faq">
            <h4 className="question" />
            <p className="answer" />
          </div>
          <div className="faq">
            <h4 className="question" />
            <p className="answer" />
          </div>
          <div className="faq">
            <h4 className="question" />
            <p className="answer" />
          </div>
          <div className="faq">
            <h4 className="question" />
            <p className="answer" />
          </div>
          <div className="faq">
            <h4 className="question" />
            <p className="answer" />
          </div>
        </div>
      </div>
    );
  }
}

export default FaqPage;

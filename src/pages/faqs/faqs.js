import React from 'react';
import { Link } from 'react-router-dom';

import './faqs.css';

class FaqPage extends React.Component {
  componentDidMount() {
    document.getElementById('toolbar').scrollIntoView();
  }

  render() {
    return (
      <div className="page" id="faq-page">
        <div className="section" id="faq-section">
          <h2>
            Got Questions?
            <br />
            We have answers.
          </h2>
          <div className="faq">
            <h4 className="question">Is support included?</h4>
            <p className="answer">Yes, customer support is included in all of our plans. We encourage you to ask questions so your finances are off of your hands, but you stay up-to-date with your business.</p>
          </div>
          <div className="faq">
            <h4 className="question">When is support available?</h4>
            <p className="answer">Support is always available during normal working hours. If you email <a href="mailto:help@accuracy.com">help@accuracy.com</a>, we will get back as soon as possible. Extended hours are common during tax season for tax services and at the end of the quarter for bookkeeping services.</p>
          </div>
          <div className="faq">
            <h4 className="question">What are your normal working hours?</h4>
            <p className="answer">We have accountants working shifts from 8am - 6pm CST. Our Kansas City location makes these hours feasable and covers the majority of traditional working hours throughout North American time zones.</p>
          </div>
          <div className="faq">
            <h4 className="question">What are Accuracy's qualifications?</h4>
            <p className="answer">Everyone on our staff has a CPA certification. Many of our employees also have experience at Big Four accounting firms. To learn more about our staff, you can meet the team <Link to="/about#team">here.</Link></p>
          </div>
          <div className="faq">
            <h4 className="question">What is your cancellation policy?</h4>
            <p className="answer">If you are unsatisfied with your service, you can cancel anytime and get a refund for any prepaid services that you have not used.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqPage;

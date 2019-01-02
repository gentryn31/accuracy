import React from 'react';

import TextLink from '../textLink/textLink.js';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p className="copyright">&copy; Accuracy 2018</p>
        <div className="links-container">
          <TextLink link="/about" text="About Us" />
          <TextLink link="/contact" text="Contact Us" />
          <TextLink link="/site-map" text="Site Map" />
        </div>
      </div>
    );
  }
}

export default Footer;

import React from 'react';

import TextLink from '../../components/textLink/textLink.js';

import './map.css';

class SiteMap extends React.Component {
  componentDidMount() {
    document.getElementById('toolbar').scrollIntoView();
  }

  render() {
    return (
      <div className="page" id="map-page">
        <div className="section" id="map-section">
          <h2>Site Map</h2>
          <div id="site-map-links">
            <h6>Information</h6>
            <TextLink link={'/'} text="Home" />
            <TextLink link={'/about'} text="About" />
            <TextLink link={'/contact'} text="Contact" />
            <TextLink link={'/faqs'} text="FAQs" />
            <TextLink link={'/copyright'} text="Copyright Info" />
            <h6>Services</h6>
            <TextLink link={'/services/bookkeeping'} text="Bookkeeping" />
            <TextLink link={'/services/taxes'} text="Taxes" />
            <TextLink link={'/services/audits'} text="Audits" />
            <TextLink link={'/services/annual-reports'} text="Annual Reports" />
            <TextLink link={'/services/consulting'} text="Consulting" />
          </div>
        </div>
      </div>
    );
  }
}

export default SiteMap;

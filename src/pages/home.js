import React, { Component } from 'react';
import { string, bool, number, any, func } from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../components/button/button.js';
import Calendar from '../components/calendar/calendar.js';
import TextLink from '../components/textLink/textLink.js';
import Toolbar from '../components/toolbar/toolbar.js';
import ToolbarLink from '../components/toolbarLink/toolbarLink.js';
import Menu from '../components/menu/menu.js';

import './home.css';

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      dateInput: ''
    };
  }

  dateSelected(e) {
    this.setState({ dateInput: e.target.innerText });
  }

  render() {
    return (
      <div className="home page">
        <Toolbar>
          <div className="toolbar-links">
            <Menu />
          </div>
        </Toolbar>
        <div className="section" id="hero-section">
          <div id="hero-text">
            <h2 id="hero-title">
              Time is Money.
              <br />
              We Save You Both.
            </h2>
            <p id="hero-subtitle">
              Our team takes on your accounting needs, allowing you to focus on
              your vision while we put you in the best financial position.
            </p>
            <Button text="Schedule a Meeting" />
          </div>
          <div id="hero-image">
            <svg viewBox="0 0 408 434" width="408" height="434">
              <defs>
                <clipPath id="_clipPath_IU4TkY93GPNpobEytL0JMExcTLs8IMhk">
                  <rect width="408" height="434" />
                </clipPath>
              </defs>
              <g clip-path="url(#_clipPath_IU4TkY93GPNpobEytL0JMExcTLs8IMhk)">
                <path
                  id="hero-arrow-one"
                  d=" M 3.047 257.578 L 94.988 257.578 C 97.807 257.578 98.783 255.703 97.166 253.394 L 51.947 188.815 C 50.33 186.506 47.705 186.506 46.088 188.815 L 0.869 253.394 C -0.748 255.703 0.228 257.578 3.047 257.578 Z "
                  fill="rgb(164,224,255)"
                />
                <path
                  id="hero-arrow-two"
                  d=" M 347.65 86.605 L 406.118 86.605 C 407.911 86.605 408.532 85.413 407.504 83.944 L 378.747 42.876 C 377.719 41.408 376.049 41.408 375.021 42.876 L 346.265 83.944 C 345.237 85.413 345.857 86.605 347.65 86.605 Z "
                  fill="rgb(229,237,244)"
                />
                <path
                  id="hero-arrow-three"
                  d=" M 239.331 434 L 402.386 434 C 407.385 434 409.116 430.675 406.248 426.58 L 326.054 312.05 C 323.187 307.955 318.53 307.955 315.663 312.05 L 235.468 426.58 C 232.601 430.675 234.332 434 239.331 434 Z "
                  fill="rgb(28,179,255)"
                />
                <path
                  d=" M 287.684 52.057 L 281.851 62.16 C 312.78 81.668 333.344 116.141 333.344 155.378 C 333.344 216.161 283.996 265.509 223.213 265.509 C 162.43 265.509 113.082 216.161 113.082 155.378 C 113.082 98.909 155.674 52.309 210.458 45.979 L 210.458 28.679 L 210.032 28.679 C 207.13 28.679 204.774 26.323 204.774 23.421 L 204.774 5.949 C 204.774 3.047 207.13 0.691 210.032 0.691 L 236.773 0.691 C 239.675 0.691 242.031 3.047 242.031 5.949 L 242.031 23.421 C 242.031 26.323 239.675 28.679 236.773 28.679 L 236.347 28.679 L 236.347 46.024 C 247.22 47.318 257.608 50.199 267.275 54.429 L 273.282 44.024 C 271.535 42.391 271.074 39.712 272.321 37.554 L 278.094 27.554 C 279.545 25.041 282.763 24.179 285.276 25.63 L 296.824 32.297 C 299.337 33.748 300.199 36.966 298.748 39.479 L 292.975 49.479 C 291.871 51.391 289.745 52.347 287.684 52.057 Z "
                  fill-rule="evenodd"
                  fill="rgb(153,184,210)"
                />
                <g id="hero-timer">
                  <circle
                    vector-effect="non-scaling-stroke"
                    cx="223.21302587561934"
                    cy="155.37798787419547"
                    r="96.45580643657661"
                    fill="rgb(255,255,255)"
                  />
                  <path
                    d=" M 221.409 147.371 C 217.746 148.194 215.007 151.469 215.007 155.378 C 215.007 159.194 217.617 162.405 221.148 163.322 L 220.847 181.773 L 225.579 181.773 L 225.285 163.32 C 228.812 162.401 231.419 159.191 231.419 155.378 C 231.419 151.474 228.687 148.203 225.031 147.374 L 223.71 64.359 L 222.764 64.359 L 221.409 147.371 Z "
                    fill-rule="evenodd"
                    fill="rgb(255,96,96)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="section" id="services-section">
          <div id="services-text">
            <h3 id="services-title">The Complete Package</h3>
            <div>
              <Link to="/services/bookkeeping">
                <div class="services-heading">
                  <h4 className="service" id="bookkeeping">
                    Bookkeeping
                  </h4>
                  <svg
                    className="heading-arrow"
                    viewBox="0 0 6.9 9.6"
                    width="6.9"
                    height="9.6">
                    <defs>
                      <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                        <rect width="6.9" height="9.6" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
                      <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className="service-paragraph" id="bookkeeping-content">
                We'll keep track of your bottom line. Profits and losses, assets
                and liabilities - we've got it all covered with our namesake
                accuracy.
              </p>
            </div>
            <div>
              <Link to="/services/taxes">
                <div class="services-heading">
                  <h4 className="service" id="taxes">
                    Taxes
                  </h4>
                  <svg
                    className="heading-arrow"
                    viewBox="0 0 6.9 9.6"
                    width="6.9"
                    height="9.6">
                    <defs>
                      <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                        <rect width="6.9" height="9.6" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
                      <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className="service-paragraph" id="taxes-content">
                Taxes are a pain and eat up time. We keep updated on tax codes
                and use that expertise to ease the burden from your shoulders.
              </p>
            </div>
            <div>
              <Link to="/services/audits">
                <div class="services-heading">
                  <h4 className="service" id="audits">
                    Audits
                  </h4>
                  <svg
                    className="heading-arrow"
                    viewBox="0 0 6.9 9.6"
                    width="6.9"
                    height="9.6">
                    <defs>
                      <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                        <rect width="6.9" height="9.6" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
                      <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className="service-paragraph" id="audits-content">
                At Accuracy, we provide an unbiased team of trained
                professionals that produce reputable reports from thorough
                audits.
              </p>
            </div>
            <div>
              <Link to="/services/annual-reports">
                <div class="services-heading">
                  <h4 className="service" id="annual-reports">
                    Annual Reports
                  </h4>
                  <svg
                    className="heading-arrow"
                    viewBox="0 0 6.9 9.6"
                    width="6.9"
                    height="9.6">
                    <defs>
                      <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                        <rect width="6.9" height="9.6" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
                      <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className="service-paragraph" id="annual-reports-content">
                Our team has trained on writing annual reports for small
                businesses, so you can spend your time on growing your company.
              </p>
            </div>
            <div>
              <Link to="/services/consulting">
                <div class="services-heading">
                  <h4 className="service" id="consulting">
                    Consulting
                  </h4>
                  <svg
                    className="heading-arrow"
                    viewBox="0 0 6.9 9.6"
                    width="6.9"
                    height="9.6">
                    <defs>
                      <clipPath id="_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE">
                        <rect width="6.9" height="9.6" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#_clipPath_znpim9M0zQRUITkgP8s2XpBZRutOGzeE)">
                      <path d=" M 0 0.278 L 0 9.309 C 0 9.586 0.184 9.682 0.411 9.523 L 6.755 5.081 C 6.982 4.922 6.982 4.665 6.755 4.506 L 0.411 0.064 C 0.184 -0.095 0 0.001 0 0.278 Z " />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className="service-paragraph" id="consulting-content">
                You have the vision. We have the experience to guide you through
                the ups and downs and lead your company to its goals.
              </p>
            </div>
          </div>
        </div>
        <div className="section" id="about-team-section">
          <div id="about-team-text">
            <h3 id="about-team-title">Say Hello to Your Personal Team</h3>
            <p id="about-team-paragraph">
              From the first meeting, we pair you with a group of experts backed
              by Accuracy’s high standard. They stay by your side throughout you
              and your company’s journey and become invested in the work you are
              doing. Because of this loyalty and consistency, you gain a team
              that wants to see you succeed and are always up to date with your
              startup’s financial goals and status. They come with all the
              benefits of hiring your own team, without the in-house cost.{' '}
            </p>
            <Button text="Meet the Team" />
          </div>
          <div id="about-team-image">
            <img src={require('../assets/team.png')} alt="The accuracy team" />
          </div>
        </div>
        <div className="section" id="testimonials-section">
          <h3 id="testimonial-title">The Results are In</h3>
          <div className="testimonials">
            <div className="testimonial">
              <h2 className="testimonial-quote-mark">“</h2>
              <p className="testimonial-quote">
                Accuracy radically transformed the way we kept track of our
                finances and spent our time. It really was a game changer.
              </p>
              <div className="testimonial-author">
                <img
                  className="testimonial-author-portrait"
                  src={require('../assets/crowder.png')}
                  alt="Portrait of Steven Crowder"
                />
                <p className="testimonial-author-name">
                  Steven Crowder, Alpha Solutions
                </p>
              </div>
            </div>
            <div className="testimonial">
              <h2 className="testimonial-quote-mark">“</h2>
              <p className="testimonial-quote">
                I am very pleased by Accuracy’s services. I was able to use the
                extra time they freed up to reach out to new customers and grow
                my business.
              </p>
              <div className="testimonial-author">
                <img
                  className="testimonial-author-portrait"
                  src={require('../assets/ford.png')}
                  alt="Portrait of Kimberly Ford"
                />
                <p className="testimonial-author-name">
                  Kimberly Ford, Acme Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="schedule-section">
          <h3 id="schedule-title">Interested? Get in Touch.</h3>
          <form id="schedule-form">
            <div className="input-name">Name</div>
            <input id="schedule-name" type="text" />
            <div className="input-name">Company</div>
            <input id="schedule-company" type="text" />
            <div className="input-name">Email</div>
            <input id="schedule-email" type="email" />
            <div className="input-name">Message</div>
            <textarea id="schedule-message" />
          </form>
          <Calendar
            onClick={e => this.dateSelected(e)}
            selected={this.state.dateInput}
          />
          <div className="schedule-action-container">
            <div>
              <Button text="Schedule" />
              <Button text="Reset" raised={false} arrow={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

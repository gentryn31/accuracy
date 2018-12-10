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
              extra time they freed up to reach out to new customers and grow my
              business.
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
            <div>
              <Button text="Schedule" />
              <Button text="Reset" raised={false} arrow={false} />
            </div>
          </form>
          <Calendar />
        </div>
        <footer>
          <div id="footer-logo">
            <svg
              className="accuracy-logo"
              viewBox="0 0 158 22"
              width="158"
              height="22">
              <defs>
                <clipPath id="_clipPath_5YPLnnvW6FfdKQ47Vcf3I0c0IMrloJE8">
                  <rect width="158" height="22" />
                </clipPath>
              </defs>
              <g clip-path="url(#_clipPath_5YPLnnvW6FfdKQ47Vcf3I0c0IMrloJE8)">
                <path
                  d=" M 48.436 3.227 L 48.436 3.227 Q 51.392 3.227 52.957 4.642 L 52.957 4.642 L 52.957 4.642 Q 54.523 6.057 54.523 8.912 L 54.523 8.912 L 54.523 16.753 L 51.567 16.753 L 51.567 15.125 L 51.567 15.125 Q 50.991 16.001 49.927 16.465 L 49.927 16.465 L 49.927 16.465 Q 48.862 16.928 47.359 16.928 L 47.359 16.928 L 47.359 16.928 Q 45.856 16.928 44.729 16.414 L 44.729 16.414 L 44.729 16.414 Q 43.602 15.901 42.988 14.987 L 42.988 14.987 L 42.988 14.987 Q 42.375 14.073 42.375 12.92 L 42.375 12.92 L 42.375 12.92 Q 42.375 11.117 43.715 10.027 L 43.715 10.027 L 43.715 10.027 Q 45.055 8.938 47.935 8.938 L 47.935 8.938 L 51.392 8.938 L 51.392 8.737 L 51.392 8.737 Q 51.392 7.335 50.553 6.583 L 50.553 6.583 L 50.553 6.583 Q 49.714 5.831 48.061 5.831 L 48.061 5.831 L 48.061 5.831 Q 46.933 5.831 45.844 6.182 L 45.844 6.182 L 45.844 6.182 Q 44.754 6.533 44.003 7.159 L 44.003 7.159 L 42.775 4.88 L 42.775 4.88 Q 43.827 4.078 45.305 3.653 L 45.305 3.653 L 45.305 3.653 Q 46.783 3.227 48.436 3.227 L 48.436 3.227 Z  M 48.011 14.649 L 48.011 14.649 Q 49.188 14.649 50.102 14.11 L 50.102 14.11 L 50.102 14.11 Q 51.016 13.572 51.392 12.57 L 51.392 12.57 L 51.392 11.017 L 48.161 11.017 L 48.161 11.017 Q 45.455 11.017 45.455 12.795 L 45.455 12.795 L 45.455 12.795 Q 45.455 13.647 46.132 14.148 L 46.132 14.148 L 46.132 14.148 Q 46.808 14.649 48.011 14.649 L 48.011 14.649 Z  M 64.668 16.928 L 64.668 16.928 Q 62.589 16.928 60.935 16.051 L 60.935 16.051 L 60.935 16.051 Q 59.282 15.175 58.355 13.609 L 58.355 13.609 L 58.355 13.609 Q 57.429 12.044 57.429 10.065 L 57.429 10.065 L 57.429 10.065 Q 57.429 8.086 58.355 6.533 L 58.355 6.533 L 58.355 6.533 Q 59.282 4.98 60.923 4.103 L 60.923 4.103 L 60.923 4.103 Q 62.564 3.227 64.668 3.227 L 64.668 3.227 L 64.668 3.227 Q 66.647 3.227 68.137 4.028 L 68.137 4.028 L 68.137 4.028 Q 69.627 4.83 70.379 6.333 L 70.379 6.333 L 67.974 7.735 L 67.974 7.735 Q 67.398 6.808 66.534 6.345 L 66.534 6.345 L 66.534 6.345 Q 65.67 5.882 64.643 5.882 L 64.643 5.882 L 64.643 5.882 Q 62.889 5.882 61.737 7.021 L 61.737 7.021 L 61.737 7.021 Q 60.585 8.161 60.585 10.065 L 60.585 10.065 L 60.585 10.065 Q 60.585 11.969 61.725 13.108 L 61.725 13.108 L 61.725 13.108 Q 62.864 14.248 64.643 14.248 L 64.643 14.248 L 64.643 14.248 Q 65.67 14.248 66.534 13.785 L 66.534 13.785 L 66.534 13.785 Q 67.398 13.321 67.974 12.394 L 67.974 12.394 L 70.379 13.797 L 70.379 13.797 Q 69.602 15.3 68.112 16.114 L 68.112 16.114 L 68.112 16.114 Q 66.621 16.928 64.668 16.928 L 64.668 16.928 Z  M 79.221 16.928 L 79.221 16.928 Q 77.142 16.928 75.489 16.051 L 75.489 16.051 L 75.489 16.051 Q 73.835 15.175 72.909 13.609 L 72.909 13.609 L 72.909 13.609 Q 71.982 12.044 71.982 10.065 L 71.982 10.065 L 71.982 10.065 Q 71.982 8.086 72.909 6.533 L 72.909 6.533 L 72.909 6.533 Q 73.835 4.98 75.476 4.103 L 75.476 4.103 L 75.476 4.103 Q 77.117 3.227 79.221 3.227 L 79.221 3.227 L 79.221 3.227 Q 81.2 3.227 82.69 4.028 L 82.69 4.028 L 82.69 4.028 Q 84.181 4.83 84.932 6.333 L 84.932 6.333 L 82.527 7.735 L 82.527 7.735 Q 81.951 6.808 81.087 6.345 L 81.087 6.345 L 81.087 6.345 Q 80.223 5.882 79.196 5.882 L 79.196 5.882 L 79.196 5.882 Q 77.443 5.882 76.29 7.021 L 76.29 7.021 L 76.29 7.021 Q 75.138 8.161 75.138 10.065 L 75.138 10.065 L 75.138 10.065 Q 75.138 11.969 76.278 13.108 L 76.278 13.108 L 76.278 13.108 Q 77.417 14.248 79.196 14.248 L 79.196 14.248 L 79.196 14.248 Q 80.223 14.248 81.087 13.785 L 81.087 13.785 L 81.087 13.785 Q 81.951 13.321 82.527 12.394 L 82.527 12.394 L 84.932 13.797 L 84.932 13.797 Q 84.155 15.3 82.665 16.114 L 82.665 16.114 L 82.665 16.114 Q 81.174 16.928 79.221 16.928 L 79.221 16.928 Z  M 97.456 3.377 L 100.587 3.377 L 100.587 16.753 L 97.606 16.753 L 97.606 15.05 L 97.606 15.05 Q 96.855 15.951 95.728 16.44 L 95.728 16.44 L 95.728 16.44 Q 94.601 16.928 93.298 16.928 L 93.298 16.928 L 93.298 16.928 Q 90.618 16.928 89.077 15.438 L 89.077 15.438 L 89.077 15.438 Q 87.537 13.947 87.537 11.017 L 87.537 11.017 L 87.537 3.377 L 90.668 3.377 L 90.668 10.591 L 90.668 10.591 Q 90.668 12.394 91.482 13.283 L 91.482 13.283 L 91.482 13.283 Q 92.296 14.173 93.799 14.173 L 93.799 14.173 L 93.799 14.173 Q 95.477 14.173 96.467 13.133 L 96.467 13.133 L 96.467 13.133 Q 97.456 12.094 97.456 10.14 L 97.456 10.14 L 97.456 3.377 Z  M 107.676 5.331 L 107.676 5.331 Q 109.028 3.227 112.435 3.227 L 112.435 3.227 L 112.435 6.207 L 112.435 6.207 Q 112.034 6.132 111.709 6.132 L 111.709 6.132 L 111.709 6.132 Q 109.88 6.132 108.853 7.197 L 108.853 7.197 L 108.853 7.197 Q 107.826 8.261 107.826 10.265 L 107.826 10.265 L 107.826 16.753 L 104.695 16.753 L 104.695 3.377 L 107.676 3.377 L 107.676 5.331 Z  M 120.325 3.227 L 120.325 3.227 Q 123.281 3.227 124.846 4.642 L 124.846 4.642 L 124.846 4.642 Q 126.412 6.057 126.412 8.912 L 126.412 8.912 L 126.412 16.753 L 123.456 16.753 L 123.456 15.125 L 123.456 15.125 Q 122.88 16.001 121.816 16.465 L 121.816 16.465 L 121.816 16.465 Q 120.751 16.928 119.248 16.928 L 119.248 16.928 L 119.248 16.928 Q 117.745 16.928 116.618 16.414 L 116.618 16.414 L 116.618 16.414 Q 115.491 15.901 114.877 14.987 L 114.877 14.987 L 114.877 14.987 Q 114.263 14.073 114.263 12.92 L 114.263 12.92 L 114.263 12.92 Q 114.263 11.117 115.604 10.027 L 115.604 10.027 L 115.604 10.027 Q 116.944 8.938 119.824 8.938 L 119.824 8.938 L 123.281 8.938 L 123.281 8.737 L 123.281 8.737 Q 123.281 7.335 122.442 6.583 L 122.442 6.583 L 122.442 6.583 Q 121.603 5.831 119.95 5.831 L 119.95 5.831 L 119.95 5.831 Q 118.822 5.831 117.733 6.182 L 117.733 6.182 L 117.733 6.182 Q 116.643 6.533 115.892 7.159 L 115.892 7.159 L 114.664 4.88 L 114.664 4.88 Q 115.717 4.078 117.194 3.653 L 117.194 3.653 L 117.194 3.653 Q 118.672 3.227 120.325 3.227 L 120.325 3.227 Z  M 119.9 14.649 L 119.9 14.649 Q 121.077 14.649 121.991 14.11 L 121.991 14.11 L 121.991 14.11 Q 122.905 13.572 123.281 12.57 L 123.281 12.57 L 123.281 11.017 L 120.05 11.017 L 120.05 11.017 Q 117.344 11.017 117.344 12.795 L 117.344 12.795 L 117.344 12.795 Q 117.344 13.647 118.021 14.148 L 118.021 14.148 L 118.021 14.148 Q 118.697 14.649 119.9 14.649 L 119.9 14.649 Z  M 136.557 16.928 L 136.557 16.928 Q 134.478 16.928 132.825 16.051 L 132.825 16.051 L 132.825 16.051 Q 131.171 15.175 130.244 13.609 L 130.244 13.609 L 130.244 13.609 Q 129.318 12.044 129.318 10.065 L 129.318 10.065 L 129.318 10.065 Q 129.318 8.086 130.244 6.533 L 130.244 6.533 L 130.244 6.533 Q 131.171 4.98 132.812 4.103 L 132.812 4.103 L 132.812 4.103 Q 134.453 3.227 136.557 3.227 L 136.557 3.227 L 136.557 3.227 Q 138.536 3.227 140.026 4.028 L 140.026 4.028 L 140.026 4.028 Q 141.517 4.83 142.268 6.333 L 142.268 6.333 L 139.863 7.735 L 139.863 7.735 Q 139.287 6.808 138.423 6.345 L 138.423 6.345 L 138.423 6.345 Q 137.559 5.882 136.532 5.882 L 136.532 5.882 L 136.532 5.882 Q 134.778 5.882 133.626 7.021 L 133.626 7.021 L 133.626 7.021 Q 132.474 8.161 132.474 10.065 L 132.474 10.065 L 132.474 10.065 Q 132.474 11.969 133.614 13.108 L 133.614 13.108 L 133.614 13.108 Q 134.753 14.248 136.532 14.248 L 136.532 14.248 L 136.532 14.248 Q 137.559 14.248 138.423 13.785 L 138.423 13.785 L 138.423 13.785 Q 139.287 13.321 139.863 12.394 L 139.863 12.394 L 142.268 13.797 L 142.268 13.797 Q 141.491 15.3 140.001 16.114 L 140.001 16.114 L 140.001 16.114 Q 138.51 16.928 136.557 16.928 L 136.557 16.928 Z  M 154.491 3.377 L 157.497 3.377 L 151.235 17.83 L 151.235 17.83 Q 150.359 20.009 149.106 20.898 L 149.106 20.898 L 149.106 20.898 Q 147.854 21.788 146.075 21.788 L 146.075 21.788 L 146.075 21.788 Q 145.073 21.788 144.096 21.462 L 144.096 21.462 L 144.096 21.462 Q 143.12 21.136 142.493 20.56 L 142.493 20.56 L 143.746 18.256 L 143.746 18.256 Q 144.197 18.681 144.81 18.932 L 144.81 18.932 L 144.81 18.932 Q 145.424 19.182 146.05 19.182 L 146.05 19.182 L 146.05 19.182 Q 146.877 19.182 147.415 18.757 L 147.415 18.757 L 147.415 18.757 Q 147.954 18.331 148.405 17.329 L 148.405 17.329 L 148.63 16.803 L 142.794 3.377 L 146.05 3.377 L 150.258 13.271 L 154.491 3.377 Z "
                  fill-rule="evenodd"
                  fill="rgb(255,255,255)"
                />
                <path
                  d=" M 0.262 18.554 L 8.119 18.554 C 8.369 18.554 8.456 18.388 8.312 18.183 L 4.45 12.668 C 4.307 12.463 4.074 12.463 3.931 12.668 L 0.069 18.183 C -0.074 18.388 0.012 18.554 0.262 18.554 Z "
                  fill="rgb(255,255,255)"
                />
                <path
                  d=" M 25.644 18.554 L 17.787 18.554 C 17.537 18.554 17.218 18.388 17.075 18.183 L 8.832 6.411 C 8.688 6.206 8.688 5.874 8.832 5.669 L 12.694 0.153 C 12.837 -0.051 13.07 -0.051 13.213 0.153 L 25.837 18.183 C 25.981 18.388 25.894 18.554 25.644 18.554 Z "
                  fill="rgb(255,255,255)"
                />
              </g>
            </svg>
          </div>
          <div id="footer-links">
            <div>
              <b>SERVICES</b>
              <TextLink text="Bookkeeping" link="bookkeeping" />
              <TextLink text="Audits" link="audits" />
              <TextLink text="Taxes" link="taxes" />
              <TextLink text="Annual Reports" link="annual-reports" />
              <TextLink text="Consulting" link="consulting" />
            </div>
            <div>
              <b>HELP</b>
              <TextLink text="About Us" link="about" />
              <TextLink text="Contact Us" link="contact" />
              <TextLink text="FAQs" link="faqs" />
              <TextLink text="Site Map" link="site-map" />
            </div>
          </div>
          <div id="footer-copyright">&copy; Accuracy 2018</div>
        </footer>
      </div>
    );
  }
}

export default Homepage;

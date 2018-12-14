import React from 'react';
import { string } from 'prop-types';

import TextLink from '../textLink/textLink.js';

import './menu.css';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'inactive'
    };
  }

  toggleMenu() {
    let newStatus = this.state.status == 'active' ? 'inactive' : 'active';
    this.setState({
      status: newStatus
    });
  }

  render() {
    return (
      <div className={`menu ${this.state.status}`}>
        <svg
          className="accuracy-logo"
          id="menu-logo"
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
        <i
          className="material-icons"
          id="menu-button"
          onClick={() => {
            this.toggleMenu();
          }}>
          {this.state.status == 'active' ? 'close' : 'menu'}
        </i>
        <div className={'menu-content'}>
          <div className={`menu-content-column`}>
            <b className={`menu-subtitle`}>SERVICES</b>
            <TextLink text="Bookkeeping" link="bookkeeping" />
            <TextLink text="Audits" link="audits" />
            <TextLink text="Taxes" link="taxes" />
            <TextLink text="Annual Reports" link="annual-reports" />
            <TextLink text="Consulting" link="consulting" />
          </div>
          <div className={`menu-content-column`}>
            <b className={`menu-subtitle`}>INFO</b>
            <TextLink text="About Us" link="about" />
            <TextLink text="FAQs" link="faqs" />
          </div>
          <div className={`menu-content-column`}>
            <b className={`menu-subtitle`}>CONNECT</b>
            <a href="https://www.twitter.com" className="info-details">
              Twitter
            </a>
            <a href="https://www.instagram.com" className="info-details">
              Instagram
            </a>
            <a href="https://www.facebook.com" className="info-details">
              Facebook
            </a>
            <a href="https://www.youtube.com" className="info-details">
              YouTube
            </a>
          </div>
          <div className={`menu-content-column`}>
            <b className={`menu-subtitle`}>HELP</b>
            <TextLink text="Contact Us" link="contact" />
            <a href="mailto:help@accuracy.com" className={`info-details`}>
              help@accuracy.com
            </a>
            <p className={`info-details`}>(816) 435-6821</p>
            <div className="menu-spacer" />
            <TextLink text="Site Map" link="site-map" />
          </div>
        </div>
        <div id="menu-copyright">&copy; Accuracy 2018</div>
      </div>
    );
  }
}

export default Menu;

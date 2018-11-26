import React, { Component } from 'react';
import { string, bool, number, any, func, } from 'prop-types';

import Toolbar from '../components/toolbar.js';
import ToolbarLink from '../components/toolbarLink.js';
import Button from '../components/button.js';
import TextLink from '../components/textLink.js';
import Calendar from '../components/calendar.js';

import './home.css';

class Homepage extends Component {
    render() {
        return (
            <div className="home">
                <Toolbar>
                    <ToolbarLink text="Schedule" />
                    <ToolbarLink text="Pricing" />
                    <ToolbarLink text="About" />
                    <ToolbarLink text="Contact" />
                </Toolbar>
                <div className="section" id="hero-section">
                    <div id="hero-text">
                        <h2 id="hero-title">Time is Money.<br />We Save You Both.</h2>
                        <h3 id="hero-subtitle">Our team takes on your accounting needs, allowing you to focus on your vision while we put you in the best financial position.</h3>
                        <Button text="Schedule a Meeting" />
                        <Button text="Pricing" raised={false} />
                    </div>
                    <div id="hero-image">

                    </div>
                </div>
                <div className="section" id="services-section" >
                    <div id="services-text">
                        <h2 id="services-title">The Complete Package</h2>
                        <h4 className="service" id="bookkeeping">Bookkeeping</h4>
                        <p className="service-paragraph" id="bookkeeping-content">We'll keep track of your bottom line. Profits and losses, assets and liabilities - we've got it all covered with our namesake accuracy.</p>
                        <h4 className="service" id="taxes">Taxes</h4>
                        <p className="service-paragraph" id="taxes-content">Taxes are a pain and eat up time. We keep updated on tax codes and use that expertise to ease the burden from your shoulders.</p>
                        <h4 className="service" id="audits">Audits</h4>
                        <p className="service-paragraph" id="audits-content">At Accuracy, we provide an unbiased team of trained professionals that produce reputable reports from thorough audits.</p>
                        <h4 className="service" id="annual-reports">Annual Reports</h4>
                        <p className="service-paragraph" id="annual-reports-content">Our team has trained on writing annual reports for small businesses, so you can spend your time on growing your company.</p>
                        <h4 className="service" id="consulting">Consulting</h4>
                        <p className="service-paragraph" id="consulting-content">You have the vision. We have the experience to guide you through the ups and downs and lead your company to its goals.</p>
                    </div>
                </div>
                <div className="section" id="about-team-section">
                    <div id="about-team-text">
                        <h2 id="about-team-title">Say Hello to Your Personal Team</h2>
                        <p id="about-team-paragraph">From the first meeting, we pair you with a group of experts backed by Accuracy’s high standard. They stay by your side throughout you and your company’s journey and become invested in the work you are doing. Because of this loyalty and consistency, you gain a team that wants to see you succeed and are always up to date with your startup’s financial goals and status. They come with all the benefits of hiring your own team, without the in-house cost. </p>
                        <Button text="Meet the Team" />
                    </div>
                    <div id="about-team-image">
                    </div>
                </div>
                <div className="section" id="testimonials-section">
                    <h2>The Results are In</h2>
                    <div className="testimonial">
                        <p className="testimonial-quote">Accuracy radically transformed the way we kept track of our finances and spent our time. It really was a game changer.</p>
                        <div className="testimonial-author">
                            <p className="testimonial-author-name">Steven Crowder, Alpha Solutions</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-quote">I am very pleased by Accuracy’s services.  I was even able to launch a new product line with the extra time they freed up.</p>
                        <div className="testimonial-author">
                            <p className="testimonial-author-name">Kimberly Ford, Acme Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="section" id="schedule-section">
                    <h2 id="schedule-title">Interested? Schedule a Meeting</h2>
                    <form id="schedule-form">
                        <div className="input-name">Name</div>
                        <input id="schedule-name" type="text" />
                        <div className="input-name">Company</div>
                        <input id="schedule-company" type="text" />
                        <div className="input-name">Email</div>
                        <input id="schedule-email" type="email" />
                        <div className="input-name">Message</div>
                        <textarea id="schedule-message" />
                        <Button text="Schedule" />
                        <Button text="Reset" raised={false} arrow={false} />
                    </form>
                    <Calendar />
                </div>
                <footer>
                    <div id="footer-logo"></div>
                    <div id="footer-links">
                        <TextLink text="About Us"/>
                        <TextLink text="Our Services"/>
                        <TextLink text="Pricing"/>
                        <TextLink text="FAQs"/>
                        <TextLink text="Contact Us"/>
                        <TextLink text="Schedule a Meeting"/>
                    </div>
                    <div id="footer-copyright"></div>
                    <TextLink text="Site Map"/>
                </footer>
            </div>
        );
    }
}

export default Homepage;
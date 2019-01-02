import React from 'react';

import EmployeeView from '../../components/employeeView/employeeView.js';

import './about.css';

class AboutPage extends React.Component {
  componentDidMount() {
    this.handleHash();
  }

  componentWillReceiveProps(newProps) {
    this.handleHash(newProps);
  }

  handleHash = (props = this.props) => {
    const hash = props.location.hash;
    const hasHash = hash != '';
    if (hasHash) {
      document.getElementById(hash.substring(1)).scrollIntoView();
    } else {
      document.getElementById('toolbar').scrollIntoView();
    }
  };

  render() {
    return (
      <div className="page">
        <div id="mission" className="section">
          <div>
            Our mission is to provide <span>quality accounting services</span> for growing companies, so they can stop spending time worrying about their numbers and <span>starting growing them.</span>
          </div>
          <i className="material-icons">trending_up</i>
        </div>
        <div id="history" className="section">
          <h3>
            What's in a name?
            <br />
            For us, everything and more.
          </h3>
          <p>
            In 2017, Drew Stanton left Deloitte to start a firm that was centered around the backbone of the American economy - private, entrepreneurial businesses. He founded Accuracy with a group of co-workers and together they worked towards a no-compromises financial company for those just getting off the ground. The result was a company that promised quality accounting services to young companies without the astronomical price tag. 
          </p>
          <div className="about-history-tint" />
        </div>
        <div id="team" className="section">
          <h3>Get to Know the Team</h3>
          <div id="employeeContainer">
            <div>
              <EmployeeView name="Drew Stanton" position="CEO" filename="stanton.png" description="Drew is the co-founder and CEO of Accuracy. After a career at Deloitte, he headed off to start his own company focused on growing businesses. He works hands-on with young companies while running Accuracy." />
              <EmployeeView name="Sophie Bell" position="Senior Accountant" filename="bell.png" description="Sophie is a senior accountant for Accuracy. She has been with the company since its founding and uses lessons learned from her experiences with Accuracy provide the best service possible for her clients." />
              <EmployeeView name="Madeline Mason" position="Accountant" filename="mason.png" description="Madeline is an accountant for Accuracy. Madeline originally interned at Accuracy and accepted an accountancy position shortly after." />
            </div>
            <div>
              <EmployeeView name="Brooklyn Holmes" position="COO" filename="holmes.png" description="Brooklyn is the co-founder and COO of Accuracy. She uses lessons from her time as a manager at Deloitte to run operations at Accuracy and consults small businesses for organizational projects." />
              <EmployeeView name="Marcus Hart" position="Tax Specialist" filename="hart.png" description="Marcus is a tax specialist for Accuracy. After working at Ernst & Young for over 10 years, he brought his vast knowledge of U.S. corporate tax codes to small businesses at Accuracy's affordable rates." />
              <EmployeeView name="Ava Roberts" position="Accountant" filename="roberts.png" description="Ava is an accountant for Accuracy. A recent Stanford graduate, Ava joined Accuracy after interning at KPMG and helps with Bookkeeping, Audits, and Taxes." />
            </div>
            <div>
              <EmployeeView name="Ben Jefferson" position="CFO" filename="jefferson.png" description="Ben is the co-founder and CFO of Accuracy. His past experience in accounting at Deloitte and current experience in making financial decisions at Accuracy gives him unique qualifications for consulting businesses. In addition to consulting, he also helps with bookkeeping, audits, and more." />
              <EmployeeView name="Christine Allen" position="Tax Specialist" filename="allen.png" description="Christine is a tax specialist for Accuracy. She transferred to Accuracy from H&R Block's tax division in early 2018 and has been serving entrepreneurs with her expertise ever since." />
              <EmployeeView name="Joseph Russo" position="Accountant" filename="russo.png" description="Joseph is an accountant for Accuracy. Although he helps with all of Accuracy's services, Joseph works primarily with bookkeeping." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;

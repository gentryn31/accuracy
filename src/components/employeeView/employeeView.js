import React from 'react';

import './employeeView.css';

class EmployeeView extends React.Component {
    render() {
        return(
            <div className="employeeView">
                <div className="employee-header">
                    <img className="employee-picture" src={require(`../../assets/${this.props.filename}`)} alt={this.props.name} />
                    <div className="employee-text">
                        <p className="employee-name">{this.props.name}</p>
                        <p className="employee-position">{this.props.position}</p>
                    </div>
                </div>
                <p className="employee-description">{this.props.description}</p>
            </div>
        );
    }
}

export default EmployeeView;
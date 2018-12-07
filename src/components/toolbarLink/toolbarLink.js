import React, { Component } from 'react';
import { string, bool, number, any, func, } from 'prop-types';
import { Link } from 'react-router-dom';

import './toolbarLink.css';

class ToolbarLink extends Component {
    render() {
        return (
            <Link to={this.props.link} className="toolbar-link">
                {this.props.text}
            </Link>
        );
    }
}

ToolbarLink.propTypes = {
    text: string.isRequired,
    link: string.isRequired,
}

export default ToolbarLink;
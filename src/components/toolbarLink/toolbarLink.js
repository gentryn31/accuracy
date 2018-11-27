import React, { Component } from 'react';
import { string, bool, number, any, func, } from 'prop-types';

import './toolbarLink.css';

class ToolbarLink extends Component {
    render() {
        return (
            <div className="toolbar-link">
                {this.props.text}
            </div>
        );
    }
}

ToolbarLink.propTypes = {
    text: string.isRequired
}

export default ToolbarLink;
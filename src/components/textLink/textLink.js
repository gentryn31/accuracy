import React, { Component } from 'react';
import { string, bool, number, any, func, } from 'prop-types';



import './textLink.css';

class TextLink extends Component {
    render() {
        return (
            <div className="text-link" id={`${this.props.text.toLowerCase().split(' ').join('-')}-text-link`}>
                {this.props.text}
            </div>
        );
    }
}

TextLink.propTypes = {
    text: string.isRequired
}

export default TextLink;
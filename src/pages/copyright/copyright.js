import React from 'react';

import './copyright.css';

class CopyrightPage extends React.Component {
    render() {
        return(
            <div className="page" id="copyrightPage">
                <div className="section" id="copyright-section">
                    <h2 id="copyright-title">Copyright Information</h2>
                    <p className="copyright-paragraph" id="unsplash-paragraph">
                        All imagery comes from <a href="https://www.unsplash.com">unsplash.com</a>, a community of photographers that grants "an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from Unsplash for free, including for commercial purposes" <a href="https://www.unsplash.com/license">(Unsplash License)</a>.
                    </p>
                    <p className="copyright-paragraph" id="material-icons-paragraph">
                        All icons come from the <a href="https://www.material.io/tools/icons/">Material Icon set</a>, an open source project created by Google.  They are free to use under the <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache License version 2.0</a>.
                    </p>
                    <p className="copyright-paragraph" id="personal-property">
                        The remainder of the website (including Accuracy's logo, branding, and copy text) was created by Nathan Gentry.
                    </p>
                </div>
            </div>
        );
    }
}

export default CopyrightPage;
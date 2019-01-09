import React from 'react';

import Button from '../../components/button/button.js';

class AuthPage extends React.Component {

    runAuth = () => {
        
    }

    render() {
        return(
            <div className="page" id="auth-page">
                <div className="section" id="auth-section">
                    <div id="">
                        <h2>Login</h2>
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <Button text="Login" onClick={() => { this.runAuth() }} />
                    </div>
                </div>
            </div>
        );
    }
}
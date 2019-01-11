import React from 'react';
import * as firebase from 'firebase';

import Button from '../../components/button/button.js';

import './auth.css';

class AuthPage extends React.Component {

    runAuth = () => {
        const email = document.getElementById("auth-username").value;
        const password = document.getElementById("auth-password").value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            if (firebase.auth().currentUser) {
                this.props.history.push("/dashboard");
            }
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            document.getElementById("auth-form-error-message").innerText = errorMessage;
            document.getElementById("auth-form-error-message").className = "active";
            // ...
        });
    }

    render() {
        return(
            <div className="page" id="auth-page">
                <div className="section" id="auth-section">
                    <form id="auth-form">
                        <h2>Login</h2>
                        <input type="text" name="username" placeholder="Username" id="auth-username" className="auth-input" />
                        <input type="password" name="password" placeholder="Password" id="auth-password" className="auth-input" />
                        <Button text="Login" onClick={() => { this.runAuth() }} />
                        <div id="auth-form-error-message" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthPage;
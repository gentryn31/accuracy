import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXZzokJ1z36XhIBXUEW_D4Nmy6Ka_gxKE",
    authDomain: "accuracy-fbla.firebaseapp.com",
    databaseURL: "https://accuracy-fbla.firebaseio.com",
    projectId: "accuracy-fbla",
    storageBucket: "accuracy-fbla.appspot.com",
    messagingSenderId: "945856739408"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

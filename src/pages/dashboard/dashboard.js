import React from 'react';
import * as firebase from 'firebase';

import Button from '../../components/button/button.js';

import './dashboard.css';

class DashboardPage extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: 'drew',
            lastName: 'stanton',
            scheduleMessages: {
                active: [],
                resolved: []
            },
            queryMessages: {
                active: [],
                resolved: [],
            },
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        if (user) {
            const nameData = {
                "drew": "stanton",
                "sophie": "bell",
                "madeline": "mason",
                "brooklyn": "holmes",
                "marcus": "hart",
                "ava": "roberts",
                "ben": "jefferson",
                "christine": "allen",
                "joseph": "russo",
            };

            const firstNameLower = user.email.split('@')[0];
            const lastNameLower = nameData[firstNameLower];

            const firstName = firstNameLower.substring(0, 1).toUpperCase() + firstNameLower.substring(1);
            const lastName = lastNameLower.substring(0, 1).toUpperCase() + lastNameLower.substring(1);

            this.setState({ firstName: firstName, lastName: lastName });

            const that = this;

            let scheduleRef = firebase.database().ref('messages');
            scheduleRef.on('value', function(snapshot) {
                that.createMessageViews(snapshot.val(), 'scheduleMessages');
            });

            let queryRef = firebase.database().ref('queries');
            queryRef.on('value', function(snapshot) {
                that.createMessageViews(snapshot.val(), 'queryMessages');
            });
        } else {
            this.props.history.push('/auth');
        }
    }

    createMessageViews = (data, type) => {
        let active = [];
        let resolved = [];

        if (type == 'scheduleMessages') {
            if (data) {
                Object.values(data).map((messageData) => {
                    const messageId = Object.keys(data)[Object.values(data).indexOf(messageData)];
                    const date = new Date(messageData.date);
                    if (messageData.resolved) {
                        resolved.push(
                            <div className="message resolved" > 
                                <p className="message-author">{ messageData.name }</p>
                                <p className="message-company">Company: { messageData.company }</p>
                                <a className="message-email" href={`mailto:${ messageData.email }`}>Email: <span>{ messageData.email }</span></a>
                                <p className="message-service">{ messageData.service }</p>
                                <p className="message-date">Date: { date.getMonth() + 1 }/{ date.getDate() }/{ date.getFullYear() }</p>
                                <p className="message-paragraph">Message: { messageData.message }</p>
                                <p className="message-resolved">Resolved by { messageData.resolved }</p>
                            </div>
                        );
                    } else {
                        active.push(
                            <div className="message" > 
                                <p className="message-author">{ messageData.name }</p>
                                <p className="message-company">Company: { messageData.company }</p>
                                <a className="message-email" href={`mailto:${messageData.email}`}>Email: <span>{ messageData.email }</span></a>
                                <p className="message-service">{ messageData.service }</p>
                                <p className="message-date">Date: { date.getMonth() + 1 }/{ date.getDate() }/{ date.getFullYear() }</p>
                                <p className="message-paragraph">Message: { messageData.message }</p>
                                <Button text="Resolve" onClick={() => {
                                    firebase.database().ref('messages/' + messageId).set({
                                        name: messageData.name,
                                        company: messageData.company,
                                        email: messageData.email,
                                        service: messageData.service,
                                        date: messageData.date,
                                        message: messageData.message,
                                        resolved: `${this.state.firstName} ${this.state.lastName}`,
                                    });
                                }} />
                            </div>
                        );
                    }
                });
            }

            

            this.setState({ scheduleMessages: { active: active, resolved: resolved } });
        } else if (type == 'queryMessages') {
            if (data) {
                Object.values(data).map((messageData) => {
                    if (messageData.resolved) {
                        resolved.push(
                            <div className="message resolved" > 
                                <p className="message-author">{ messageData.name }</p>
                                <a className="message-email" href={`mailto:${messageData.email}`}>Email: <span>{ messageData.email }</span></a>
                                <p className="message-paragraph">Message: { messageData.query }</p>
                                <p className="message-resolved">Resolved by { messageData.resolved }</p>
                            </div>
                        );
                    } else {
                        const messageId = Object.keys(data)[Object.values(data).indexOf(messageData)];
                        active.push(
                            <div className="message"> 
                                <p className="message-author">{ messageData.name }</p>
                                <a className="message-email" href={`mailto:${messageData.email}`}>Email: <span>{ messageData.email }</span></a>
                                <p className="message-paragraph">Message: { messageData.query }</p>
                                <Button text="Resolve" onClick={() => {
                                    firebase.database().ref('queries/' + messageId).set({
                                        name: messageData.name,
                                        email: messageData.email,
                                        query: messageData.query,
                                        resolved: `${this.state.firstName} ${this.state.lastName}`,
                                    });
                                }} />
                            </div>
                        );
                    }
                });
            }

            this.setState({ queryMessages: { active: active, resolved: resolved } });
        }
    }

    logout = () => {
        firebase.auth().signOut().then(() => { this.props.history.push('/'); });
    }

    render() {
        return(
            <div className="page" id="DashboardPage">
                <div className="section" id="dashboard-section">
                    <div className="employee-header">
                        <img src={require(`../../assets/${this.state.lastName.toLowerCase()}.png`)} alt={`${this.state.firstName} ${this.state.lastName}`} className="dashboard-picture" />
                        <h3 className="dashboard-title">{this.state.firstName} {this.state.lastName}</h3>
                        <Button text="Logout" onClick={() => { this.logout() }} raised={false} />
                    </div>
                    <div className="message-board">
                        <div className="schedule-messages">
                            <h4>Schedule Messages</h4>
                            {this.state.scheduleMessages.active.length == 0 && this.state.scheduleMessages.resolved.length == 0 ? <p>There are no current scheduling messages.</p> : '' }
                            {this.state.scheduleMessages.active.length != 0 ? <h6>Active</h6> : ''}
                            {this.state.scheduleMessages.active}
                            {this.state.scheduleMessages.resolved.length != 0 ? <h6>Resolved</h6> : ''}
                            {this.state.scheduleMessages.resolved}
                        </div>
                        <div className="query-messages">
                            <h4>Queries</h4>
                            {this.state.queryMessages.active.length == 0 && this.state.queryMessages.resolved.length == 0 ? <p>There are no current queries.</p> : '' }
                            {this.state.queryMessages.active.length != 0 ? <h6>Active</h6> : ''}
                            {this.state.queryMessages.active}
                            {this.state.queryMessages.resolved.length != 0 ? <h6>Resolved</h6> : ''}
                            {this.state.queryMessages.resolved}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;
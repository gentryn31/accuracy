import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/toolbar/toolbar.js';
import Menu from './components/menu/menu.js';
import Footer from './components/footer/footer.js';

import HomePage from './pages/home/home.js';
import ServicePage from './pages/service/service.js';
import AboutPage from './pages/about/about.js';
import ContactPage from './pages/contact/contact.js';
import FaqPage from './pages/faqs/faqs.js';
import SiteMap from './pages/map/map.js';
import ErrorPage from './pages/error/error.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar>
            <div className="toolbar-links">
              <Menu />
            </div>
          </Toolbar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/services/:service(bookkeeping|taxes|audits|annual-reports|consulting)"
              component={ServicePage}
            />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/faqs" component={FaqPage} />
            <Route exact path="/site-map" component={SiteMap} />
            <Route exact path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

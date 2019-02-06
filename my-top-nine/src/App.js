import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WebPageView from './components/WebPage/WebPageView';
import LoginView from './components/LoginPage/LoginView';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.isLoggedIn 
        ? <Route path="/" component={WebPageView} />
        : <Route path="/" component={LoginView} />
        }
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(
  mapStateToProps,
  { }
)(App);
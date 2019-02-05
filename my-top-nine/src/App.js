import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './components/actions';
import LoginView from './components/Login/LoginView';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/HomePage/HomePage';
import UserPage from './components/UserPage/UserPage';

class App extends Component {

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn 
        ? <div>
          <NavBar 
            logout={this.handleLogout}
            username={this.props.user.username}
          />
          <Route exact path='/' component={HomePage} />
          <Route 
            exact path={`/${this.props.user.username}`}
            render={ props => (
            <UserPage
              {...props}
              username={this.props.user.username}
            />
            )}
          />
          </div>
        : <Route path="/" component={LoginView} />
        }
        
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
});

export default connect(
    mapStateToProps,
    { logout }
)(App);
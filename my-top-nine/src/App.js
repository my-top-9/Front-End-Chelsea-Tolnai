import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout, signup } from './components/actions';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/HomePage/HomePage';
import UserPage from './components/UserPage/UserPage';

import { users } from './dummy-data'

class App extends Component {

  state = {
    user: {
      username: '',
      password: '',
    },
    newUser: {
      email: '',
      username: '',
      password1: '',
      password2: '',
    }
  }

  handleLoginInput = e => {
    this.setState({
      user: {
      ...this.state.user,
      [e.target.name]: e.target.value
      }
    });
  }

  handleLoginSumbit = e => {
    e.preventDefault();
    const usernames = users.map(user => user.username);
    const currentUser = users.filter(user => user.username === this.state.user.username);
    console.log(currentUser);
    if (!this.state.user.username || !this.state.user.password) {
      alert('Please fill in all fields.')
    } else if (!usernames.includes(this.state.user.username)) {      
      alert('Username does not exist. Please Sign Up.')
    } else if (currentUser[0].password !== this.state.user.password) {      
      alert('Incorrect Password.')
    } else {
    this.props.login(this.state.user)
    this.setState(
      { user: {
        username: '',
        password: '',
      }
    });
    document.getElementById("loginForm").reset();
    }
  }

  handleSignUpInput = e => {
    this.setState({
      newUser: {
      ...this.state.newUser,
      [e.target.name]: e.target.value
      }
    });
  }

  handleSingUpSumbit = e => {
    e.preventDefault();
    if (this.state.newUser.password1 !== this.state.newUser.password2) {      
      alert('Passwords do not match!')
    } else if (!this.state.newUser.email || !this.state.newUser.username || !this.state.newUser.password1 || !this.state.newUser.password2) {
      alert('Please fill in all fields.');
    } else {
    this.props.signup(this.state.newUser)
    this.setState(
      { newUser: {
        email: '',
        username: '',
        password1: '',
        password2: '',
      }
    });
    document.getElementById("signupForm").reset();
    } 
  }

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
        : <div>
          <Route 
            exact path='/' 
            render={ props => (
              <Login
                {...props}
                user={this.state.user}
                handleLoginInput= {this.handleLoginInput}
                handleLoginSumbit = {this.handleLoginSumbit}
              />
            )} 
          />
          <Route 
            exact path='/signup' 
            render={ props => (
              <SignUp
                {...props}
                newUser={this.state.newUser}
                handleSignUpInput= {this.handleSignUpInput}
                handleSingUpSumbit = {this.handleSingUpSumbit}
              />
            )} 
          />
          </div>
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
    {login, logout, signup}
)(App);
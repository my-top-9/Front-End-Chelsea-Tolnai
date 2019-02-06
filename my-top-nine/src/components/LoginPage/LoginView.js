import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, signup } from '../actions';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginError from './LoginError';
import LoaderGrid from '../Reusable/Loader'

class LoginView extends Component {

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
    if (!this.state.user.username || !this.state.user.password) {
        alert('Please fill in all fields.');
    } else {
    this.props.login(this.state.user)
    this.setState({ 
        user: {
            username: '',
            password: '',
        },
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

  handleSignUpSumbit = e => {
    e.preventDefault();
    if (this.state.newUser.password1 !== this.state.newUser.password2) {      
      alert('Passwords do not match!')
    } else if (!this.state.newUser.email || !this.state.newUser.username || !this.state.newUser.password1 || !this.state.newUser.password2) {
      alert('Please fill in all fields.');
    } else {
    const newUser = {
        "username": this.state.newUser.username,
        "password": this.state.newUser.password2
    }
    this.props.signup(newUser);
    this.setState({ 
        user: {
            username: this.state.newUser.username,
            password: ''
        },
        newUser: {
            email: '',
            username: '',
            password1: '',
            password2: '',
        }
    });
    document.getElementById("signupForm").reset();
    this.props.history.replace('/');
    } 
  }

  render() {
    return (
        <div>
            {(this.props.loggingInUser || this.props.registeringUser)
            ? <LoaderGrid />
            : <div>
                <LoginHeader />
                <Route 
                    exact path='/' 
                    render={ props => (
                    <LoginForm
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
                    <SignUpForm
                        {...props}
                        newUser={this.state.newUser}
                        handleSignUpInput= {this.handleSignUpInput}
                        handleSignUpSumbit = {this.handleSignUpSumbit}
                    />
                    )} 
                />
                {this.props.error && 
                    <Route 
                        exact path='/'
                        render={ props => (
                            <LoginError 
                                {...props}
                                error={this.props.error}
                            />
                        )}
                    />
                }
              </div>
            }
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loggingInUser: state.loggingInUser,
  registeringUser: state.registeringUser,
  error: state.error,
});

export default connect(
    mapStateToProps,
    {login, signup}
)(LoginView);
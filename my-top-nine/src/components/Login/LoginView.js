import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, login, signup } from '../actions';
import Loader from 'react-loader-spinner';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

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
    this.props.getUsers();
    const registeredUserNames = this.props.registeredUsers.map(user => user.username);
    if (!this.state.user.username || !this.state.user.password) {
        alert('Please fill in all fields.');
    } else if (!registeredUserNames.includes(this.state.user.username)) {      
        alert('Username does not exist. Please Sign Up.');
        this.props.history.push('/signup');
        this.setState({ 
            newUser: {
                username: this.state.user.username,
                email: '',
                password1: '',
                password2: '',
            },
        });
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
    const registeredUserNames = this.props.registeredUsers.map(user => user.username);
    if (this.state.newUser.password1 !== this.state.newUser.password2) {      
      alert('Passwords do not match!')
    } else if (!this.state.newUser.email || !this.state.newUser.username || !this.state.newUser.password1 || !this.state.newUser.password2) {
      alert('Please fill in all fields.');
    } else if (registeredUserNames.includes(this.state.newUser.username)) {      
        alert('Username already exists.');
    } else {
    const newUser = {
        "username": this.state.newUser.username,
        "password": this.state.newUser.password1
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
            {(this.props.gettingUsers || this.props.registeringUser)
            ? <Loader type="Oval" color="black" height="100" width="100" />
            : <div>
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
              </div>
            }
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  registeredUsers: state.registeredUsers,
  gettingUsers: state.gettingUsers,
  registeringUser: state.registeringUser,
});

export default connect(
    mapStateToProps,
    {getUsers, login, signup}
)(LoginView);
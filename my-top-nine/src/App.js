import React, { Component } from 'react';
import Login from './components/Login/Login';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from './components/actions';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/HomePage/HomePage';
import UserPage from './components/UserPage/UserPage'

class App extends Component {

  state = {
    user: {
      username: '',
      password: '',
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
    this.props.login(this.state.user)
    this.setState(
      { user: {
        username: '',
        password: '',
      }
    });
    document.getElementById("loginForm").reset();
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn 
        ? <div>
          <NavBar logout={this.handleLogout}/>
          <Route exact path='/' component={HomePage} />
          <Route path='/user' component={UserPage} />
          </div>
        : <Login 
            username={this.state.username}
            password={this.state.password}
            handleLoginInput= {this.handleLoginInput}
            handleLoginSumbit = {this.handleLoginSumbit}
          />
        }
        
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  error: state.error,
});

export default connect(
    mapStateToProps,
    {login, logout}
)(App);
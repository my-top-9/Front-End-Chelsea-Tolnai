import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';
import ls from 'local-storage';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/HomePage/HomePage';
import UserPage from './components/UserPage/UserPage'

class App extends Component {

  handleLogout = () => {
    ls.remove('user');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <NavBar logout={this.handleLogout}/>
        <Route exact path='/' component={HomePage} />
        <Route path='/user' component={UserPage} />
      </div>
      
    );
  }
}

export default Authenticate(App)(Login);
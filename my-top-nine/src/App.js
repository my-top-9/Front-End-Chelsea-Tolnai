import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';
import ls from 'local-storage';
import './App.css';

class App extends Component {
  handleLogout = () => {
    ls.remove('user');
    window.location.reload();
  }

  render() {
    return (
      <div>HomePage <div onClick={this.handleLogout}>LogOut</div></div>
      
    );
  }
}

export default Authenticate(App)(Login);
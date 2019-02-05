import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions';

import NavBar from './Navigation/NavBar';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';

class WebpageView extends Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <NavBar 
                    logout={this.handleLogout}
                    username={this.props.user.username}
                />
                <Route 
                    exact 
                    path='/' 
                    render={ props => (
                        <HomePage
                            {...props}
                        />
                    )}
                />
                <Route 
                    exact
                    path={`/${this.props.user.username}`}
                    render={ props => (
                        <UserPage
                            {...props}
                            username={this.props.user.username}
                        />
                    )}
                />
            </div>
        
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});
  
export default connect(
    mapStateToProps,
    { logout }
)(WebpageView);
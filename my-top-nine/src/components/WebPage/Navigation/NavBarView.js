import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions';

import NavBar from './NavBar';

class NavBarView extends Component {

    state = {
        dropdownOpen: false
    };

    handleToggleDrop = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <NavBar 
                username={this.props.user.username}  
                toggleDrop={this.handleToggleDrop}  
                dropdownOpen={this.state.dropdownOpen}            
                logout={this.handleLogout}
            />
        
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});
  
export default connect(
    mapStateToProps,
    { logout }
)(NavBarView);
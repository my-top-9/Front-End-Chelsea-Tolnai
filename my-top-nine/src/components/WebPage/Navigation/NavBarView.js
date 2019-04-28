import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions';

import NavBar from './NavBar';

class NavBarView extends Component {

    state = {
        dropdownOpen: false,
        tooltipOpen: false
    };

    handleToggleDrop = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    handleToggleTooltip = () => {
        this.setState(prevState => ({
            tooltipOpen: !prevState.tooltipOpen
        }));
    };

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <NavBar 
                username={this.props.username}  
                toggleDrop={this.handleToggleDrop}  
                dropdownOpen={this.state.dropdownOpen} 
                toggleTooltip={this.handleToggleTooltip}  
                tooltipOpen={this.state.tooltipOpen}            
                logout={this.handleLogout}
            />
        
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    username: state.username,
});
  
export default connect(
    mapStateToProps,
    { logout }
)(NavBarView);
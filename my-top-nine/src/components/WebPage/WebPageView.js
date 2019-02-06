import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBarView from './Navigation/NavBarView';
import HomePage from './HomePage/HomePage';
import UserPageView from './UserPage/UserPageView';
import AccountPageView from './AccountPage/AccountPageView';

class WebpageView extends Component {

    render() {
        return (
            <div>
                <NavBarView />
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
                    path={`/${this.props.username}`}
                    render={ props => (
                        <UserPageView
                            {...props}
                            username={this.props.username}
                        />
                    )}
                />
                <Route 
                    exact
                    path={`/${this.props.username}/account`}
                    render={ props => (
                        <AccountPageView
                            {...props}
                            username={this.props.username}
                        />
                    )}
                />
            </div>
        
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    username: state.username,
});
  
export default connect(
    mapStateToProps,
    {  }
)(WebpageView);
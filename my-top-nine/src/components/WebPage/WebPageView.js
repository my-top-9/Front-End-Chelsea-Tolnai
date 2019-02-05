import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBarView from './Navigation/NavBarView';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
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
                    path={`/${this.props.user.username}`}
                    render={ props => (
                        <UserPage
                            {...props}
                            username={this.props.user.username}
                        />
                    )}
                />
                <Route 
                    exact
                    path={`/${this.props.user.username}/account`}
                    render={ props => (
                        <AccountPageView
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
    {  }
)(WebpageView);
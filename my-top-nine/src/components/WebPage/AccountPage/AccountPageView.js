import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { updateAccount, deleteAccount } from '../../actions';

import AccountPage from './AccountPage';

class AccountPageView extends Component {
    state = {
        updateUser: {
            username: '',
        },
    }

    handleAccountInput = e => {
        this.setState({ updateUser: {[e.target.name]: e.target.value}});
    }

    updateAccount = e => {
        e.preventDefault();
        if (!this.state.updateUser.username) {
            alert('Please pick a new Username.');
        } else {
            this.props.updateAccount(this.props.username, this.state.updateUser)
        }
    }

    deleteAccount = () => {
        this.props.deleteAccount(this.props.username);
        this.props.history.replace('/');
    }

    render () {
        return (
            <div>
                {this.props.deletingUser
                ? <Loader type="Oval" color="black" height="100" width="100" />
                : <AccountPage 
                    username={this.props.username}
                    updateUser={this.state.updateUser}
                    handleAccountInput={this.handleAccountInput}
                    updateAccount={this.updateAccount}
                    deleteAccount={this.deleteAccount}
                  />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    username: state.username,
    deletingUser: state.deletingUser,
});
  
export default connect(
    mapStateToProps,
    { updateAccount, deleteAccount }
)(AccountPageView);
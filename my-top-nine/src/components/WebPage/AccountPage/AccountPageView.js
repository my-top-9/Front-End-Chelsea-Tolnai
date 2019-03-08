import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAccount, deleteAccount } from '../../actions';

import AccountPage from './AccountPage';
import LoaderGrid from '../../Reusable/Loader';

class AccountPageView extends Component {
    state = {
        updateUser: {
            username: '',
            password: ''
        },
        deleteModal: false
    }

    handleAccountInput = e => {
        this.setState({ 
            updateUser: {
                ...this.state.updateUser,
                [e.target.name]: e.target.value
            }
        });
    }

    updateAccount = e => {
        e.preventDefault();
        if (!this.state.updateUser.username || !this.state.updateUser.password) {
            alert('Please pick a new Username and enter password.');
        } else {
            this.props.updateAccount(this.props.username, this.state.updateUser, this.props.history);
            this.props.history.replace('/');
        }
    }

    deleteAccount = e => {
        e.preventDefault();
        this.props.deleteAccount(this.props.username, this.props.history);
        this.props.history.replace('/');
    }

    toggleDeleteModal = e => {
        e.preventDefault();
        this.setState(prevState => ({
            deleteModal: !prevState.deleteModal
        }))
    }

    render () {
        return (
            <div>
                {this.props.deletingUser || this.props.updatingUser
                ? <LoaderGrid />
                : <AccountPage 
                    username={this.props.username}
                    updateUser={this.state.updateUser}
                    handleAccountInput={this.handleAccountInput}
                    updateAccount={this.updateAccount}
                    deleteAccount={this.deleteAccount}
                    deleteModal={this.state.deleteModal}
                    toggleDeleteModal={this.toggleDeleteModal}
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
    updatingUser: state.updatingUser,
});
  
export default connect(
    mapStateToProps,
    { updateAccount, deleteAccount }
)(AccountPageView);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import LoaderGrid from '../../Reusable/Loader';

class HomePageView extends Component {
    render() {
        return (
            <div>
            {this.props.deletingUser || this.props.updatingUser || this.props.loggingOutUser
            ? <LoaderGrid />
            : <HomePage />
            }
        </div>
        );
    }
}

const mapStateToProps = state => ({
    loggingOutUser: state.loggingOutUser,
    deletingUser: state.deletingUser,
    updatingUser: state.updatingUser,
});
  
export default connect(
    mapStateToProps,
    { }
)(HomePageView);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* Actions */
import { fetchUserDetails } from '../actions/UserActions';

class User extends Component {
  componentDidMount() {
    this.props.fetchUserDetails();
  }

  render() {
    return (
      <div>
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      fetchUserDetails
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class PrivateRoute extends Component {
  render() {
    const { user, componentUser } = this.props;
    const ComponentUser = componentUser;
    
    return (
      <Route render={(props) => (
        user ? 
          (<ComponentUser {...this.props} />): 
          <Redirect to='/signup' />
      )} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(PrivateRoute);
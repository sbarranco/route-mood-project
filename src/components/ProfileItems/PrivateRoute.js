import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


class PrivateRoute extends Component {
  render() {
    const { user, component } = this.props;
    const ComponentUser = component;
    
    return (
      <Route render={(props) => (
        user ? 
          (<ComponentUser user={this.props.user} />): 
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

export default withRouter(connect(mapStateToProps)(PrivateRoute));
import React, { Component } from 'react';
import loadingIcon from './images/loadingIcon.png';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    return (
      <div id="loading" className="loading">
        {this.props.children}
      </div>
    );
  }
}

Loading.propTypes = {
  children: PropTypes.node,
};

Loading.defaultProps = {
  children: <img src={loadingIcon} alt="loading"/>
};

export default Loading;
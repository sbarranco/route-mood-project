import React, {Component} from 'react';

import Intro from './Intro';
import Form from './Form';
import './LoginCard.css';

class LoginCard extends Component {
  render(){
    return (
      <div className="app-container">
        <div className="container">
          <Intro />
          <Form />
        </div>
      </div>
    );
  }
}

export default LoginCard;
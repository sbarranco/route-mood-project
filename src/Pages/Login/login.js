import React, { Component } from 'react';
import './login.css';

import SignIn from '../../components/SignIn/SignIn';

export default class Login extends Component {
  render (){
    return (
      <div>
        <SignIn />      
      </div>
    );
  }
}


import React, { Component } from 'react';
import './Footer.scss';
import logo from './logo.png';

class Footer extends Component {
  render (){
    return (
      <div className="footer">               
        <p>&copy;RouteMood <img className="logo-foot" src={logo} />
        Silvia Barranco</p>
        
      </div>            
    );
  }
}

export default Footer;

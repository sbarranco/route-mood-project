import React, { Component } from 'react';
import './header.scss';

import { Link, withRouter } from 'react-router-dom';
import {setUserInfo} from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import Sidebar from './Sidebar/Sidebar';


class Header extends Component {
  render() {
    const { user, logout} = this.props;    
       
    return (
      <header className='toolbar'> 
        <Sidebar user={user} logout={logout}/>         
        <div className="navbar-header">            
          <Link to='/home'>
            <img className="navbar-brand" src={require('./images/logo-white.png')} alt='logo'/> 
          </Link>                      
          <div className="name-logo">RouteMood</div>                
        </div>               
      </header>      
    );
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    setUser: (userInfo) => { dispatch(setUserInfo(userInfo)); }
  };
};

export default withRouter(connect(null, dispatchStateToProps)(Header));
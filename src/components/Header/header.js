import React, { Component } from 'react';
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResponsiveMenu from 'react-responsive-navbar';

import { Link, withRouter } from 'react-router-dom';
import {setUserInfo} from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, logout} = this.props;    
       
    return (
      <header className='toolbar'>      
        <nav className="navbar">
          <div className="navbar-header">            
            <Link to='/home'>
              <img className="navbar-brand" src={require('./images/logo-white.png')} alt='logo'/> 
            </Link>                      
            <div className="name-logo">RouteMood</div>                
          </div>
          <div className="spacer"></div>
          <div className="nav-items">
            <ResponsiveMenu
              menuOpenButton={<FontAwesomeIcon icon="bars" size="lg"/>}
              menuCloseButton={<FontAwesomeIcon icon="times" size="lg"/>}
              changeMenuOn="500px"
              largeMenuClassName="large-menu-classname"
              smallMenuClassName="small-menu-classname"
              menu={
                <ul className="ul-nav">
                  <li className="li-nav">
                    {!user && <Link to='/login'><FontAwesomeIcon icon="user-circle" size="sm"/>Sign In</Link>}
                    {user && <Link to={`/private/user/${user.id}`}><FontAwesomeIcon icon="user-circle" size="sm"/>Profile</Link>}
                  </li>
                  <li className="li-nav"><FontAwesomeIcon icon="heart" size="sm"/>About</li>
                  <li className="li-nav"><FontAwesomeIcon icon="envelope" size="sm"/>Contact</li>
                  <li className="li-nav">{user && <div>Bienvenido/a {user.name}! <button onClick={logout}>Logout</button></div>}</li>
                </ul>
              }
            />
          </div>       
        </nav>
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


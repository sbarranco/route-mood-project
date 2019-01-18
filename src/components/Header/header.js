import React, { Component } from 'react';
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from 'react-router-dom';


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
              menuOpenButton={<FontAwesomeIcon icon="bars" size="24px"/>}
              menuCloseButton={<FontAwesomeIcon icon="times" size="7px"/>}
              changeMenuOn="500px"
              largeMenuClassName="large-menu-classname"
              smallMenuClassName="small-menu-classname"
              menu={
                <ul>
                  <li>
                    {!user && <Link to='/login'><FontAwesomeIcon icon="user-circle" size="5px"/>Sign In</Link>}
                    {user && <div>Welcome Back {user.name}! (<a href="#" onClick={logout}>Logout</a>)</div>}
                  </li>
                  <li><FontAwesomeIcon icon="heart" size="5px"/>About</li>
                  <li><FontAwesomeIcon icon="envelope" size="5px"/>Contact</li>
                </ul>
              }
            />
          </div>       
        </nav>
      </header>

      
    );
  }
}

export default Header;


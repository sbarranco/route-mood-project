import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bubble as Menu } from 'react-burger-menu';
import { HashLink  } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

class Sidebar extends Component {    
  render(){
    const { user, logout} = this.props; 

    return (
      <Menu right  pageWrapId={'page-wrap'} isOpen={ false }>
        <div id="page-wrap">
          <ul className="ul-nav">
            <li className="li-nav"><Link to="/home#home"><FontAwesomeIcon className="font-icon" icon="home" size="sm" />Inicio</Link></li>
            <li className="li-nav">
              {!user && <Link to='/login'><FontAwesomeIcon className="font-icon" icon="user-circle" size="sm"/>Sign In</Link>}
              {user && <Link to={`/private/user/${user.id}/profile`}><FontAwesomeIcon className="font-icon" icon="user-circle" size="sm"/>Perfil</Link>}
            </li>
            <li className="li-nav"><HashLink to="/home#about"><FontAwesomeIcon className="font-icon" icon="heart" size="sm"/>Sobre</HashLink></li>
            <li className="li-nav"><HashLink to="/home#contact"><FontAwesomeIcon className="font-icon" icon="envelope" size="sm"/>Contacto</HashLink></li>
            <li className="li-nav">{user && <div>Bienvenido/a {user.name}! <button className="logout-btn" onClick={logout}>Salir</button></div>}</li>
          </ul> 
        </div>             
      </Menu>
    );
  }
}

export default Sidebar;
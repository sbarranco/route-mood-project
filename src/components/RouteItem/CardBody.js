import React, {Component} from 'react';
import './RouteItem.scss';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends Component {
  render() {
    const {route} = this.props;   
    return (      
      <button className="button-primary">
        <Link to={`/route/${route.id}/details`}>
          <FontAwesomeIcon icon="chevron-circle-right" size="sm"/> Descúbrela
        </Link>
      </button>
        
    );
  }
}

class CardBody extends Component {  
  render() {
    const {route, title, text, time, points} = this.props;
    return (
      <div className="card-body">                    
        <h2 className='title-routeItem'>{title}</h2>        
        <p className="body-content">{text}</p>
        <p className="time">Tiempo aprox: {time} horas</p>       
        <Button route={route} points={points}/>
      </div>
    );
  }
}

export default CardBody;
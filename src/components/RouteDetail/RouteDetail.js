import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';
import MapApp from '../Maps/Map';
import './RouteDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
class RouteDetail extends Component {
  constructor (props) {
    super (props);
  
    this.state= {
      points: '',
      routeItems: '',
      pointsNames: [],
      flipped: false,
    };
  }
  
  async componentDidMount() {
    const id  = this.props.match.params.id;        
    const routeItems = await DatabaseApi.getDocumentById('routes', id);      
    const points = await DatabaseApi.getCollection(`/routes/${id}/points`);  
    this.setState({ points, routeItems});
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped});
  }
  
  render(){
    const {points, routeItems, flipped}  = this.state;  
      
    return(
      <div className= 'flipper-container'>
        <div className={'flipper' + (flipped ? ' flipped' : '')}>
          <CardBack points={points} flip={this.flip} flipped={flipped}/>
          <CardFront points={points} routeItems={routeItems} flip={this.flip} flipped={flipped} />
        </div>
      </div> 

    );
  }
}
  
export default withRouter(RouteDetail);

class CardFront extends Component { 
  render() {
    const { points, routeItems, flip}  = this.props;
      
    return(
      <div className= 'front tile'>        
        <h1 className="title-route">{routeItems.name}</h1>
        <p>{routeItems.description}</p>            
        <ul className="ul-points">{points && points.map(p => 
          <li className="points-list" key={p.name}>                
            <FontAwesomeIcon className="map-icon" icon='map-pin' size="xs" color='#974949'/>            
            {p.name}</li>
        )}
        </ul>                                    
        <button className="button-map" onClick={flip}>
          <FontAwesomeIcon  icon="chevron-circle-right" size="sm"/>
            Ver Mapa</button>
      </div>         
    );
  }
}

class CardBack extends React.Component {  
  render() {
    const { points, flip }  = this.props;
    
    return(
      <div className='back tile'>
        <MapApp points={points} /> 
        <button className="button-map" onClick={flip}>
          <FontAwesomeIcon icon="chevron-circle-right" size="sm"/>
        Ver Ruta</button>      
      </div>
    );
  }
}
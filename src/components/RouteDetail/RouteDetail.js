import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';
import MapApp from '../Maps/Map';
import './RouteDetail.scss';

 
class RouteDetail extends Component {
  constructor (props) {
    super (props);
  
    this.state= {
      points: '',
      routeItems: '',
      pointsNames: [],
    };
  }
  
  async componentDidMount() {
    const id  = this.props.match.params.id;        
    const routeItems = await DatabaseApi.getDocumentById('routes', id);      
    const points = await DatabaseApi.getCollection(`/routes/${id}/points`);    
    
    this.setState({ points, routeItems});
  }
  
  render(){
    const {points, routeItems}  = this.state;  
    console.log(Object.values(points));
    
    return(
      <div className='card-container-det'>
        <div className='card-body-det'>
          <CardBack points={points} />
          <CardFront points={points} routeItems={routeItems} />
        </div>
      </div>  
    );
  }
}
  
export default withRouter(RouteDetail);

class CardFront extends Component {  
  render() {
    const { points, routeItems}  = this.props;  
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='col-xs-6 side-front-content'>
            <h1>{routeItems.name}</h1>
            <p>{routeItems.description}</p>            
            {/* {points.map(p => <p key={p.name}>{p.name}</p>)};  */} 
            <p>Lugares recorridos:     
            </p>                                      
          </div>
        </div>
      </div>
    
    );
  }
}

class CardBack extends React.Component {  
  render() {
    const { points }  = this.props;
    console.log(points);
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <MapApp points={points} />          
        </div>
      </div>
    );
  }
}




